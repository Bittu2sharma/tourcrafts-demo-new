from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class LeadBase(BaseModel):
    name: str
    email: str
    phone: str
    package_id: Optional[int] = None
    message: Optional[str] = None
    source: Optional[str] = "website"

class LeadCreate(LeadBase):
    pass

class LeadResponse(LeadBase):
    id: int
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True
