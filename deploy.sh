apt-get update && apt-get install -y python3 python3-pip && pip3 install --no-cache-dir awscli && rm -rf /var/lib/apt/lists/*
npm install
npm run build
echo "finish build"
aws s3 sync build/ s3://aws-s3-picpay-docs-sfpj-digital-use1-prd-hwttbtf/wallet/ --exclude "*.tmp"
echo "finish sync s3 bucket"