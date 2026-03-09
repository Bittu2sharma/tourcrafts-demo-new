from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import packages, leads, blog

app = FastAPI(
    title="TourCrafts API",
    description="Backend API for TourCrafts Travel Agency",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(packages.router, prefix="/api/packages", tags=["Packages"])
app.include_router(leads.router, prefix="/api/leads", tags=["Leads"])
app.include_router(blog.router, prefix="/api/blogs", tags=["Blogs"])

@app.get("/")
def root():
    return {"message": "TourCrafts API is running", "version": "1.0.0"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
