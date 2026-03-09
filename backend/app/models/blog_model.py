from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean
from sqlalchemy.sql import func
from app.database.db import Base

class Blog(Base):
    __tablename__ = "blogs"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(500), nullable=False)
    content = Column(Text, nullable=True)
    excerpt = Column(Text, nullable=True)
    image = Column(String(500), nullable=True)
    category = Column(String(100), nullable=True)
    author = Column(String(255), default="TourCrafts Team")
    featured = Column(Boolean, default=False)
    created_at = Column(DateTime, server_default=func.now())
