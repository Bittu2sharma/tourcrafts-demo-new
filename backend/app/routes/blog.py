from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database.db import get_db
from app.models.blog_model import Blog

router = APIRouter()

@router.get("/")
def get_blogs(skip: int = 0, limit: int = 100, category: str = None, db: Session = Depends(get_db)):
    query = db.query(Blog)
    if category:
        query = query.filter(Blog.category == category)
    return query.order_by(Blog.created_at.desc()).offset(skip).limit(limit).all()

@router.get("/{blog_id}")
def get_blog(blog_id: int, db: Session = Depends(get_db)):
    blog = db.query(Blog).filter(Blog.id == blog_id).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")
    return blog

@router.post("/")
def create_blog(title: str, content: str, category: str = None, image: str = None, db: Session = Depends(get_db)):
    blog = Blog(title=title, content=content, category=category, image=image)
    db.add(blog)
    db.commit()
    db.refresh(blog)
    return blog

@router.delete("/{blog_id}")
def delete_blog(blog_id: int, db: Session = Depends(get_db)):
    blog = db.query(Blog).filter(Blog.id == blog_id).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")
    db.delete(blog)
    db.commit()
    return {"message": "Blog deleted successfully"}
