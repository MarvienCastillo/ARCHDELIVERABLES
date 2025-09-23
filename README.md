# ARCHDELIVERABLES

Name: Marvien Angel C. Castillo
This is a deliverables for Term 1 2025-2026 SY. This is a **Backend Challenge**.
To use the CRUD operation API, first step is to clone the repository. This is important because
the codes will not work unless all the files and dependencies are installed.

## How to clone the repository
Open git bash and change the directory where you wanna clone this repository. Then type
```
git clone https://github.com/MarvienCastillo/ARCHDELIVERABLES.git
```
Once cloned, in your command line, run 
```
node app
```
After running ```node app``` , type ```localhost:3000/``` in a browser then the route below
> ***Note***\
> When updating values in the API and refreshing the website, please stop it first by clicking ``` ctrl + c ``` in the terminal then run ```node app``` again
## Video Properties
Each video contains the following properties:
- Title - title of the video
- Date - date and time video was uploaded
- Description - description caption attached to the video
- Link - the link to the video on YouTube
- Channel - the channel where the video comes from
- Series - the type of video series the video falls under
## CRUD Operations API 
This part contains the CRUD operation API and their ***routes*** such as:
- /create -> Add a video to the database.
- /update -> Edit a video.
- /delete -> Delete a video from the database.
- /get -> Get video data.
- /select-all -> Get all videos from a specific video series.
- /get-latest -> Get the latest video released by a certain channel.
## /create - add a video to the database
To add a video to the database, run ```localhost:3000/create```in a browser. It will automatically add video to the database.\
To change the values, update the values in the code then run ```localhost:300/create``` again.\
This will add a video to the database and print the values or data in the webpage.
## /update - Edit a video
To update values in a video, run ```localhost:3000/update/_id_```. Change the ```_id_``` with the unique ID of a video in the database.\
You can see the id of the videos by running ```localhost:3000/get``` which prints all the videos in the database.\
To update a specific value or property, change the property ```{ title: 'New Title'}``` in the code to a specific property or add another property.\
## /delete - Delete a video from the database
To delete a video from the database, run ```localhost:3000/delete/_id_```. Change the ```id``` with the unique ID of a video in the database.\
You can see the id of the videos by running ```localhost:3000/get``` which prints all the videos in the database.\
After running ```localhost:3000/delete/_id_```, it will immediately delete the video from the database and print the ID that was deleted in the webpage.
## /get - Get video data.
This route gets all the video data available in the database. To run it, type ```localhost:3000/get```.\
It will show all the videos that is in the database.
## /select-all - Get all videos from a specific video series
To get all the videos from a specific series , run ```localhost:3000/select-all/_series_```. Change the ```_series_``` with a series name.\
This will print all the videos from a specific series.
## /get-latest - Get the latest video released by a certain channel.
To get the latest video released by a certain channel, run ```localhost:3000/get-latest/_channel_```.\
Change the ```_channel_``` with a channel name.








