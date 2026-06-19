from PIL import Image, ImageDraw
import os

out_dir = r"C:/Users/Batu/research-template/research/presentation/workspace"

# Slide dimensions in pixels (720x405, matching pt dimensions)
W, H = 720, 405

# Create RGBA image (transparent background)
img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Draw the diagonal stripe as a filled polygon, then apply gradient alpha
# Stripe: from top-left area sweeping to bottom-right, then fade alpha row by row
# Polygon shape: top-left triangle/parallelogram
# Points: (0,0), (420,0), (180,405), (0,405)
polygon = [(0, 0), (420, 0), (180, 405), (0, 405)]

# Create a separate layer for the stripe
stripe = Image.new("RGBA", (W, H), (0, 0, 0, 0))
stripe_draw = ImageDraw.Draw(stripe)

# Draw the polygon in electric blue
stripe_draw.polygon(polygon, fill=(0, 194, 255, 255))

# Apply gradient alpha: fade from left to right within the polygon
# We'll do this by creating a gradient mask
import numpy as np

# Convert stripe to numpy
arr = np.array(stripe, dtype=np.float32)

# For each pixel, compute distance from left edge relative to the polygon width
# Simple approach: gradient based on x coordinate
# At x=0: alpha ~0.18 * 255 = 46
# At x=420: alpha ~0.0
# Beyond x=420: already transparent (polygon ends)

x_coords = np.arange(W, dtype=np.float32)
# alpha_factor: 0.18 at x=0, 0.0 at x=420, 0 beyond
alpha_factor = np.clip(1.0 - x_coords / 420.0, 0, 1) * 0.18
# Shape: (W,)
# Apply to image: arr[:, :, 3] is alpha channel
# alpha_factor broadcast over height
alpha_2d = np.tile(alpha_factor, (H, 1))  # (H, W)

# Multiply existing alpha by our factor
arr[:, :, 3] = arr[:, :, 3] * alpha_2d

# Convert back
result = Image.fromarray(arr.astype(np.uint8), "RGBA")

out_path = os.path.join(out_dir, "gradient_stripe.png")
result.save(out_path)
print(f"Saved: {out_path}")
