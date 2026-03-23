#!/bin/bash
# Deploy script for cPanel

set -e  # Exit on any error

echo "🚀 Starting TOBS Plumbing and Projects deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running in production directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: package.json not found. Run this script from project root.${NC}"
    exit 1
fi

echo -e "${YELLOW}Step 1: Installing dependencies...${NC}"
npm install --production || pnpm install --prod

echo -e "${YELLOW}Step 2: Building Next.js application...${NC}"
npm run build || pnpm build

echo -e "${YELLOW}Step 3: Setting permissions...${NC}"
chmod +x server.js
chmod 644 .htaccess

echo -e "${GREEN}✅ Deployment preparation complete!${NC}"
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Ensure Node.js app is configured in cPanel"
echo "2. Verify environment variables are set"
echo "3. Start/restart the application in cPanel"
echo "4. Test your website at https://www.tobsplumbingandprojects.co.za"
