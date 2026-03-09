from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from app.database.db import Base

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    phone = Column(String(20), nullable=False)
    package_id = Column(Integer, nullable=True)
    message = Column(Text, nullable=True)
    source = Column(String(50), default="website")  # website, whatsapp, phone
    created_at = Column(DateTime, server_default=func.now())
