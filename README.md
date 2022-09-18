# Quick Notes making extension in chrome 
This chrome extension allows a user to generate notes instantly and download its PDF locally

https://user-images.githubusercontent.com/87617110/190652101-ba4feb85-b525-4c9f-80f0-ff240036a701.mp4


## Usage

  #### To make a new file
  
  1. Open the extension
  2. Click on `New File` button.
  3. Enter the name in the alert box and click `OK`
  
  ![save](https://user-images.githubusercontent.com/87617110/190664045-acaad898-0232-417e-be4b-41bcf9a29742.png)


  #### To add any point 

  1. Open the extension
  2. Create a new file. If exist, click and open it.
  3. Close the extension and chose a portion of a text on any webpage
  4. Right click top open menu and click `Add a point` item \

   ![save](https://user-images.githubusercontent.com/87617110/190651810-d72202bc-0d6b-4912-b145-1b709664961a.png)

    
  #### To generate PDF of a file   
  
  1. Open the extension and choose a file
  2. Click on `Save PDF` button. \

   ![save](https://user-images.githubusercontent.com/87617110/190650844-e1437de6-9c46-416d-9662-81177fc2d988.png)

  #### To delete a file   
  
  1. Open the extension and choose a file
  2. Click on `Delete` button. \
  
   ![save](https://user-images.githubusercontent.com/87617110/190662615-befec56a-b883-4d27-955e-558ac56e3f4b.png)

    
  #### To delete any point   
  
  1. Open the extension and choose a file
  2. Click on `Garbage` icon \

   ![Delete](https://user-images.githubusercontent.com/87617110/190650359-635ce02c-e820-4ff6-a195-82777f0e8639.png)


## Installation from source

  1. Visit chrome://extensions/
  2. Ensure Developer mode is checked
  3. Click Load unpacked extension...
  4. Locate and select the directory `build`

## Development
  1. Clone repo `git clone https://github.com/dhimanAbhi/quicky-notes.git`
  2. `npm install`
  3. `npm build` to build the app
  4.  To run on chrome, from here follow ***Installation from source*** steps
