from pydantic import BaseModel, EmailStr
from typing import Optional, List

class PackageBase(BaseModel):
    title: str
    destination: str
    price: float
    duration: str
    description: Optional[str] = None
    image: Optional[str] = None
    category: Optional[str] = None
    rating: Optional[float] = 0.0

class PackageCreate(PackageBase):
    highlights: Optional[str] = None
    itinerary: Optional[str] = None
    inclusions: Optional[str] = None
    exclusions: Optional[str] = None

class PackageResponse(PackageBase):
    id: int
    highlights: Optional[str] = None
    itinerary: Optional[str] = None
    inclusions: Optional[str] = None
    exclusions: Optional[str] = None

    class Config:
        from_attributes = True

class PricingRequest(BaseModel):
    package_id: int
    tier: str  # budget, deluxe, premium
    travelers: int = 1
    travel_date: Optional[str] = None

class PricingResponse(BaseModel):
    base_price: float
    total_base: float
    taxes: float
    discount: float
    final_price: float
    tier: str
    travelers: int
