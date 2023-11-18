# BannerHub
Web Application using Spring Boot and ReactJS. This application helps me with my daily routine as Graphic designer by adding a specific specifcation for HTML Banners.
Using this application the job of 4 minutes turns into 3 seconds!
I'm really happy with the result, and will use it in daily.

![b1](https://github.com/zoyazip/BannerHub/assets/67118409/20ca08e8-6420-4684-9325-7b352dcbb50d)
![b2](https://github.com/zoyazip/BannerHub/assets/67118409/43b5ef11-9e54-4509-a2cf-cb497b90cb78)
![b3](https://github.com/zoyazip/BannerHub/assets/67118409/7151c6ee-0af8-47d1-b720-277c1ea720ce)
![b4](https://github.com/zoyazip/BannerHub/assets/67118409/1d34c6f4-55ab-4f2f-aa3b-a90f0eb9083d)

## Features

- Uploading files on server
- Injecting link to the banner
- Make banner valid for Google HTML banner ads requirements
- Zip everything in one file

## During this project I have touched

- Spring Boot 3
- JPA
- Hibernate
- Postgres
- Apache Commons IO
- Zeroturnaround Library
- React JS
- Axios

## How it works

- On the main page user uploads Files to the server (As one Zip file)
- Application shows each banner details and allows user to remove any of banner
- After that user can paste the link for the clickTag (after clicking on banner browser will open a new tab with the provided link)
- After clicking on download button, client will send a request with updated banner details (link), server process html files, pack them into zip file and sends it back as one file

###Thing to upgrade

In my opinion I could make an image compression tool, to decrease file size, as it's must be less, than 150kb. But it's only attends to google specification.
I also could refactor code, to make it more efficient and easier to read.
One thing to mention is that this app is only used on pc. It is optimised for smaller screens, but not for mobiles, because I have never used it on small devices since I'm worling on pc.
