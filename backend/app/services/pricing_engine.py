"""
Pricing Engine for TourCrafts
Handles date-wise pricing, pax-based pricing, tier markups, discounts, and taxes.
"""

from app.schemas.package_schema import PricingRequest, PricingResponse

# Tier pricing multipliers
TIER_MULTIPLIERS = {
    "budget": 1.0,
    "deluxe": 1.4,
    "premium": 2.0,
}

# Seasonal pricing adjustments (month-based)
SEASONAL_ADJUSTMENTS = {
    1: 1.0,   # January
    2: 1.0,   # February
    3: 0.9,   # March - off-season discount
    4: 0.85,  # April - off-season discount
    5: 0.85,  # May
    6: 0.8,   # June - monsoon discount
    7: 0.8,   # July
    8: 0.8,   # August
    9: 0.85,  # September
    10: 1.1,  # October - festive season
    11: 1.15, # November - peak season
    12: 1.25, # December - peak season
}

# Group discounts
GROUP_DISCOUNTS = {
    1: 0.0,
    2: 0.0,
    3: 0.05,   # 5% for 3 people
    4: 0.10,   # 10% for 4 people
    5: 0.10,
    6: 0.12,   # 12% for 6+ people
}

TAX_RATE = 0.05  # 5% GST

# Base prices per package (in a real app, this would come from the database)
BASE_PRICES = {
    1: 24999,  # Andaman
    2: 14999,  # Goa
    3: 29999,  # Rajasthan
    4: 19999,  # Kerala
    5: 44999,  # Bali
    6: 54999,  # Dubai
    7: 27999,  # Ladakh
    8: 34999,  # Thailand
}


def calculate_price(request: PricingRequest) -> PricingResponse:
    """
    Calculate the final price for a package based on:
    - Base price of the package
    - Selected tier (budget/deluxe/premium)
    - Number of travelers (pax-based pricing)
    - Travel date (seasonal adjustments)
    - Group discounts
    - Taxes (GST)
    """
    # Get base price
    base_price = BASE_PRICES.get(request.package_id, 20000)

    # Apply tier multiplier
    tier_multiplier = TIER_MULTIPLIERS.get(request.tier, 1.0)
    tier_price = base_price * tier_multiplier

    # Apply seasonal adjustment if date provided
    if request.travel_date:
        try:
            month = int(request.travel_date.split("-")[1])
            seasonal_adj = SEASONAL_ADJUSTMENTS.get(month, 1.0)
            tier_price = tier_price * seasonal_adj
        except (IndexError, ValueError):
            pass

    # Round to nearest 100
    tier_price = round(tier_price / 100) * 100

    # Calculate totals
    travelers = max(1, request.travelers)
    total_base = tier_price * travelers

    # Apply group discount
    discount_rate = GROUP_DISCOUNTS.get(min(travelers, 6), 0.12)
    discount = round(total_base * discount_rate)

    # Calculate taxes
    taxable_amount = total_base - discount
    taxes = round(taxable_amount * TAX_RATE)

    # Final price
    final_price = taxable_amount + taxes

    return PricingResponse(
        base_price=tier_price,
        total_base=total_base,
        taxes=taxes,
        discount=discount,
        final_price=final_price,
        tier=request.tier,
        travelers=travelers,
    )
