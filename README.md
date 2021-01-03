# lhft-gui
A web GUI to present data from lhft-backend service.

# Run the GUI locally
```
# git clone https://github.com/rockyliyanlok/lhft-gui.git
# cd lhft-gui
# npm install --save
# npm run dev
```

# Demo (vercel deployment)
The web GUI is deployed to vercel for demo:
https://lhft-gui.vercel.app/

# Pages

## Home page
__Path__: `/`  
__Description__: The home page present realtime data from lhft-backend service  
__Features__:  
* show realtime data from lhft-backend service
* show 500 elements in maximum
* paginated 100 elements a page
* `threshold` is a settable that colorize price cell

## Settings
__Path__: `/settings`  
__Description__: The settings page provide a submit form for user to change the update frequency  
__Features__:  
* show current update frequency in milliseconds
* user can submit a new update frequency
* check if the new update frequency valid
