import React from 'react'
import { CardNews } from '../../molecules';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


const ListNews = () => {

  const exampleNews = [
    {
      author: "Pranay Parab",
      title: "How to Block JavaScript on Your iPhone or Android (and When You Should)",
      description: "Much of the modern web would be vastly different if not for JavaScript, the programming language that’s allowed for interactive elements to be added to your favorite websites. Features like chat boxes, audio and video players, and infinite scrolling are just …",
      url: "https://lifehacker.com/how-to-block-javascript-on-your-iphone-or-android-and-1847810908",
      urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a9151f508b279c3a92b0d1262d205431.jpg",
      publishedAt: "2021-10-06T18:00:00Z",
      content: "Much of the modern web would be vastly different if not for JavaScript, the programming language thats allowed for interactive elements to be added to your favorite websites. Features like chat boxes… [+2163 chars]"
    },
    {
      author: "Ashley Carman",
      title: "Amazon is building a Clubhouse competitor that turns hosts into DJs",
      description: "Amazon is working on a new live audio app, internally called Project Mic. The app will allow hosts and listeners to interact, and show hosts can build programming around music.",
      url: "https://www.theverge.com/2021/10/26/22744585/amazon-project-mic-launch-live-audio-app",
      urlToImage: "https://cdn.vox-cdn.com/thumbor/bJHLWH-k-S9cXaT5jWBHiRZhUM4=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22954158/acastro_211024_1777_amazonMusic_0001.jpg",
      publishedAt: "2021-10-26T12:30:00Z",
      content: "A new app is in the works\r\nIllustration by Alex Castro\r\nAmazon is next on the list of companies getting into the live audio game. The company is building a new app, codenamed Project Mic, that gives … [+2808 chars]"
    },
    {
      author: "Entrepreneur Store",
      title: "Learn Today's Most Popular Programming Language",
      description: "Become a Python programmer and see how it can help your business.",
      url: "https://www.entrepreneur.com/article/390786",
      urlToImage: "https://assets.entrepreneur.com/content/3x2/2000/1634062199-Ent-Python.jpg",
      publishedAt: "2021-10-15T16:30:00Z",
      content: "Python is the world's most popular programming language and there's a decent chance you've never even heard of it. That's because Python isn't quite a glamour language like JavaScript or C. It's a wo… [+1787 chars]"
    },
    {
      author: "Alyse Stanley",
      title: "YouTube TV and NBCUniversal Have Kissed And Made Up",
      description: "Good news, YouTube TV subscribers: Sunday Night Football isn’t going anywhere. After a contentious public face-off over a contract dispute, YouTube TV and NBCUniversal have finally worked out a deal that will keep NBCU’s programming on the platform. Read more…",
      url: "https://gizmodo.com/youtube-tv-and-nbcuniversal-have-kissed-and-made-up-1847790246",
      urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e96b425a3cd1b3acb5b11c34d13f549f.jpg",
      publishedAt: "2021-10-03T18:08:00Z",
      content: "Good news, YouTube TV subscribers: Sunday Night Football isnt going anywhere. After a contentious public face-off over a contract dispute, YouTube TV and NBCUniversal have finally worked out a deal t… [+2384 chars]"
    },
    {
      author: "Matthew Carlson",
      title: "Need a New Programming Language? Try Zig",
      description: "Maybe you’ve heard of it, maybe you haven’t. Zig is a new programming language that seems to be growing in popularity. Let’s do a quick dive into what it is, why it’s unique…",
      url: "https://hackaday.com/2021/10/05/need-a-new-programming-language-try-zig/",
      urlToImage: "https://hackaday.com/wp-content/uploads/2021/10/zig_banner.png",
      publishedAt: "2021-10-05T14:00:16Z",
      content: "Maybe you’ve heard of it, maybe you haven’t. Zig is a new programming language that seems to be growing in popularity. Let’s do a quick dive into what it is, why it’s unique, and what sort of things … [+6074 chars]"
    }
  ]

  return (
    <Box style={{margin: 50}}>
      <Container>
        <Grid container >
          {exampleNews.map((item, key) => {
            if (key === 0) {
              return (
                <Grid item xs={8} key={key}>
                  <CardNews content={item}/>
                </Grid>
              )
            }
            else if (key === 1) {
              return (
                <Grid item xs={4} key={key}>
                  <CardNews content={item}/>
                </Grid> 
              )
            } else {
              return (
                <Grid item xs md={6} lg={4} key={key}>
                  <CardNews content={item}/>
                </Grid>
              )
            }
          })}
          {/* <Grid item xs={8}>
            <CardNews/>
          </Grid>
          <Grid item xs={4}>
            <CardNews/>
          </Grid>
          <Grid item xs md={6} lg={4}>
            <CardNews/>
          </Grid>
          <Grid item xs md={6} lg={4}>
            <CardNews/>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}


export default ListNews;