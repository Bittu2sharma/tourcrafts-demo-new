from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from typing import List
from app.database.db import get_db
from app.models.lead_model import Lead
from app.schemas.lead_schema import LeadCreate, LeadResponse

router = APIRouter()

@router.get("/", response_model=List[LeadResponse])
def get_leads(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(Lead).order_by(Lead.created_at.desc()).offset(skip).limit(limit).all()

@router.post("/", response_model=LeadResponse)
def create_lead(lead: LeadCreate, db: Session = Depends(get_db)):
    db_lead = Lead(**lead.model_dump())
    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)
    # TODO: Send email notification
    # TODO: Send WhatsApp notification
    return db_lead

@router.get("/{lead_id}", response_model=LeadResponse)
def get_lead(lead_id: int, db: Session = Depends(get_db)):
    lead = db.query(Lead).filter(Lead.id == lead_id).first()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    return lead

@router.delete("/{lead_id}")
def delete_lead(lead_id: int, db: Session = Depends(get_db)):
    lead = db.query(Lead).filter(Lead.id == lead_id).first()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    db.delete(lead)
    db.commit()
    return {"message": "Lead deleted successfully"}

@router.get("/export/csv")
def export_leads_csv(db: Session = Depends(get_db)):
    """Export leads as CSV — placeholder for CSV export functionality"""
    leads = db.query(Lead).all()
    return {"message": f"Export ready: {len(leads)} leads", "format": "csv"}
