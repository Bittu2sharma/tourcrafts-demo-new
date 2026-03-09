from sqlalchemy import Column, Integer, String, Float, Text
from app.database.db import Base

class Package(Base):
    __tablename__ = "packages"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(255), nullable=False)
    destination = Column(String(255), nullable=False)
    price = Column(Float, nullable=False)
    duration = Column(String(100), nullable=False)
    description = Column(Text, nullable=True)
    image = Column(String(500), nullable=True)
    category = Column(String(100), nullable=True)
    rating = Column(Float, default=0.0)
    highlights = Column(Text, nullable=True)  # JSON string
    itinerary = Column(Text, nullable=True)    # JSON string
    inclusions = Column(Text, nullable=True)   # JSON string
    exclusions = Column(Text, nullable=True)   # JSON string
