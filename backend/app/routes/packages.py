from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database.db import get_db
from app.models.package_model import Package
from app.schemas.package_schema import PackageCreate, PackageResponse, PricingRequest, PricingResponse
from app.services.pricing_engine import calculate_price

router = APIRouter()

@router.get("/", response_model=List[PackageResponse])
def get_packages(skip: int = 0, limit: int = 100, category: str = None, db: Session = Depends(get_db)):
    query = db.query(Package)
    if category:
        query = query.filter(Package.category == category)
    return query.offset(skip).limit(limit).all()

@router.get("/{package_id}", response_model=PackageResponse)
def get_package(package_id: int, db: Session = Depends(get_db)):
    pkg = db.query(Package).filter(Package.id == package_id).first()
    if not pkg:
        raise HTTPException(status_code=404, detail="Package not found")
    return pkg

@router.post("/", response_model=PackageResponse)
def create_package(package: PackageCreate, db: Session = Depends(get_db)):
    db_package = Package(**package.model_dump())
    db.add(db_package)
    db.commit()
    db.refresh(db_package)
    return db_package

@router.put("/{package_id}", response_model=PackageResponse)
def update_package(package_id: int, package: PackageCreate, db: Session = Depends(get_db)):
    db_package = db.query(Package).filter(Package.id == package_id).first()
    if not db_package:
        raise HTTPException(status_code=404, detail="Package not found")
    for key, value in package.model_dump().items():
        setattr(db_package, key, value)
    db.commit()
    db.refresh(db_package)
    return db_package

@router.delete("/{package_id}")
def delete_package(package_id: int, db: Session = Depends(get_db)):
    db_package = db.query(Package).filter(Package.id == package_id).first()
    if not db_package:
        raise HTTPException(status_code=404, detail="Package not found")
    db.delete(db_package)
    db.commit()
    return {"message": "Package deleted successfully"}

@router.post("/pricing", response_model=PricingResponse)
def get_pricing(request: PricingRequest):
    return calculate_price(request)
