#!/bin/bash

# Script to create markdown files for new images and update site files
# Run this script from the root directory of your Hugo site

# Create the work directory if it doesn't exist
mkdir -p content/work

# Function to create a markdown file
create_md_file() {
  local filename=$1
  local image=$2
  local title=$3
  local price=$4
  local type=$5
  local width=$6
  local height=$7

  cat > "content/work/$filename" << EOF
---
image: "/images/$image"
title: "$title"
description: "Oil on canvas"
price: $price
type: "$type"
dimensions: true
width: $width
height: $height
---
EOF

  echo "Created: content/work/$filename"
}

# Create markdown files for each image
echo "Creating markdown files..."

create_md_file "iris-seeds.md" "iris seeds.jpg" "Iris Seeds" 300 "Still Life" 42 43
create_md_file "monte-amiata-2.md" "Monte Amiata 2.jpg" "Monte Amiata 2" 375 "Landscape" 50 40
create_md_file "olive-grove-8.md" "Olive Grove 8.jpg" "Olive Grove 8" 325 "Landscape" 58 48
create_md_file "olive-leaves.md" "Olive Leaves.jpg" "Olive Leaves" 280 "Still Life" 45 50
create_md_file "olive-tree-5.md" "Olive Tree 5.jpg" "Olive Tree 5" 325 "Landscape" 55 45
create_md_file "olive-tree-8.md" "Olive tree 8.jpg" "Olive Tree 8" 350 "Landscape" 60 50
create_md_file "olive-tree-12.md" "Olive tree 12.jpg" "Olive Tree 12" 300 "Landscape" 50 60
create_md_file "olive-tree-13.md" "Olive Tree 13.jpg" "Olive Tree 13" 340 "Landscape" 55 45
create_md_file "olive-tree-15.md" "Olive Tree 15.jpg" "Olive Tree 15" 380 "Landscape" 60 50
create_md_file "olve-tree-11.md" "Olve tree 11.jpg" "Olive Tree 11" 320 "Landscape" 55 45
create_md_file "seed-head.md" "Seed Head.jpg" "Seed Head" 275 "Still Life" 40 50
create_md_file "seeds.md" "Seeds.jpg" "Seeds" 250 "Still Life" 38 45
create_md_file "still-life-with-yellow-vase.md" "Still life with yellow vase.jpg" "Still Life with Yellow Vase" 375 "Still Life" 45 55
create_md_file "tulips.md" "Tulips.jpg" "Tulips" 350 "Still Life" 40 50
create_md_file "tuscan-landscape-new.md" "Tuscan Landscape.jpg" "Tuscan Landscape" 400 "Landscape" 65 55

