#!/bin/bash
git add .
read -p "enter your message" message 
git commit -m $message
git push

