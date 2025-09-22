const express = require('express');
const mongoose = require('mongoose');
const Video = require('../models/video'); 

// express app
const app = express();

const uri = "mongodb+srv://marviencastillo_db_user:archdeliverables@archdeliverables.aacypzw.mongodb.net/?retryWrites=true&w=majority&appName=archdeliverables";
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000, () => console.log('Server is running on port 3000')))
    .catch(err => console.log(err));

// CRUD Functions


// create video to the database
app.get('/create',(req,res) => {
    // const video = new Video({
    //     title: 'ARCHers Recap March 17-28, 2025 | Archers Network',
    //     date:   new Date("2025-04-05"),
    //     description: `In this ARCHers Recap: The Legislative Assembly probes potential amendments to the DLSU Student Handbook, MANIBELA held a three-day transport strike against inaccurate PTMP consolidation figures, and DLSU advances campus renovations with new elevator construction. 
    //                 ARCHers Recap features the latest university news and events, as well as the important national stories for the Lasallian community.
    //                 #ARCHNews #DLSUNews #PHNews #ARCHersRecap #ARCH #ArchersNetwork`,
    //     link: 'https://youtu.be/6KvyeW568wQ?si=63OSwFrIaJYu2Hws',
    //     channel: 'Archers Recap',
    //     series: 'NCA'
    // })

    const video = new Video({
        title: 'ARCHers Recap March 17-28, 2025 | Archers Network',
        date:   new Date("2025-04-05"),
        description: `In this ARCHers Recap: The Legislative Assembly probes potential amendments to the DLSU Student Handbook, MANIBELA held a three-day transport strike against inaccurate PTMP consolidation figures, and DLSU advances campus renovations with new elevator construction. 
                    ARCHers Recap features the latest university news and events, as well as the important national stories for the Lasallian community.
                    #ARCHNews #DLSUNews #PHNews #ARCHersRecap #ARCH #ArchersNetwork`,
        link: 'https://youtu.be/6KvyeW568wQ?si=63OSwFrIaJYu2Hws',
        channel: 'Archers Recap',
        series: 'ENT'
    })
    

    video.save()
        .then(result=>{
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

// edit a video 
app.get('/update', async (req, res) => {
  try {
    const update = await Video.findByIdAndUpdate(
      '68d157f3023e3e1d9becd6f9',
      { title: 'New Title' },
      { new: true } // return the updated document
    );

    if (!update) {
      console.log('Not Found');
      return res.status(404).send('Video not found');
    }

    console.log('Successful');
    res.send(`Updated video: ${update.title}`);
  } catch (error) {
    res.status(500).send('Update error');
  }
});

// delete a video
app.get('/delete', async (req,res)=>{
    try{
        let id = '68d1782cecbcfe934ce30ccc';
        const deleteID = await Video.findByIdAndDelete(id);
        
        if (!deleteID) {
            console.log('Not Found');
            return res.status(404).send('Video not found');
        }
        console.log('Successful');
        res.send(`Updated video: ${udeleteID.id}`);
    } catch(error){
        res.status(500).send('Delete error');
    }

})
// get video data


// select all videos from a specific video series
app.get('/select-all', async (req,res)=>{
    const videos = await Video.findOne({series: 'NCA'});
    res.send(videos);
})
// get the latest video released by a certain channel

