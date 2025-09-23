const express = require('express');
const mongoose = require('mongoose');
const Video = require('./models/video'); 

// express app
const app = express();

const uri = "mongodb+srv://marviencastillo_db_user:archdeliverables@archdeliverables.aacypzw.mongodb.net/?retryWrites=true&w=majority&appName=archdeliverables";
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000, () => console.log('Server is running on port 3000')))
    .catch(err => console.log(err));

// CRUD operation API

// create video to the database
app.get('/create',(req,res) => {
    try{
        // values here can be changed
        const video = new Video({
            title: 'New Title',
            date:   new Date("2025-04-05"),
            description: `In this ARCHers Recap: The Legislative Assembly probes potential amendments to the DLSU Student Handbook, MANIBELA held a three-day transport strike against inaccurate PTMP consolidation figures, and DLSU advances campus renovations with new elevator construction. 
                        ARCHers Recap features the latest university news and events, as well as the important national stories for the Lasallian community.
                        #ARCHNews #DLSUNews #PHNews #ARCHersRecap #ARCH #ArchersNetwork`,
            link: 'https://youtu.be/6KvyeW568wQ?si=63OSwFrIaJYu2Hws',
            channel: 'ENT',
            series: 'seARCHlight'
        })
        

        video.save()
            .then(result=>{
                res.send(result);
            })
            .catch(err => {
                console.log(err);
            });
    }catch(err){
        res.status(500).send('Create error');
    }
});

// edit a video 
app.get('/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const update = await Video.findByIdAndUpdate(
      id ,
      { title: 'New Title' }, // you can change this to test 
      { new: true } 
    );

    if (!update) {
        return res.status(404).send('<h1>Id ' + id + ' not found!</h1>');
    }

    console.log('Successful');
    res.send(`Updated video: ${update.title}`);
  } catch (error) {
    res.status(500).send('Update error');
  }
});

// delete a video
app.get('/delete/:id', async (req,res)=>{
    try{
        const id = req.params.id; 
        const deleteID = await Video.findByIdAndDelete(id);
        
        if (!deleteID) {
            return res.status(404).send('<h1>Id ' + id + ' not found!</h1>');
        }
        console.log('Successful');
        res.send(`Deleted video: ${deleteID.id}`);
    } catch(error){
        res.status(500).send('Delete error');
    }

})
// get video data
app.get('/get', async (req,res)=>{
    const get = await Video.find();
    res.send(get);
})

// select all videos from a specific video series
app.get('/select-all/:series', async (req,res)=>{
    try{
        const series = req.params.series;
        const videos = await Video.find({series: series}); 
        if(videos.length == 0){
            return res.status(404).send('<h1>No Video under series ' + series + ' found! </h1>');
        }
        res.send(videos);
    }catch(err){
        res.status(500).send('GET error');
    }

})
// get the latest video released by a certain channel
app.get('/get-latest/:channel',async (req,res) =>{
    try{
        const channel = req.params.channel;
        const date = await Video.findOne({channel: channel}).sort({date : 'asc'}); // you can change the channel value 
        if(!date){
            return res.status(404).send('<h1>No Video under channel ' + channel + ' found! </h1>');
        }
        
        res.send(date);
    }catch(error){
        res.status(500).send('GET error');
    }
    
})

