import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.css']
})
export class WhatWeOfferComponent implements OnInit {
  
  path1 = "../../../assets/img/001-process.png";
  path2 = "../../../assets/img/002-social-media.png";
  path3 = "../../../assets/img/003-responsive.png";
  path4 = "../../../assets/img/007-analysis.png";
  path5 = "../../../assets/img/004-social-media-1.png";
  path6 = "../../../assets/img/008-computer.png";
  title1 = "SOCIAL MEDIA MANAGEMENT";
  title2 = "SOCIALS GROWTH CAMPAIGN";
  title3 = "BRANDING & MEDIA";
  title4 = "INFLUENCER MARKETING";
  title5 = "SOCIAL MEDIA PAID ADVERTISING";
  title6 = "CONTENT MARKETING SERVICES";
  text1 = "Perfect for growing your brand’s social community and engage with the right audience. We manage everything from curation of content to management of comments and everything in between.";
  text2 = "Our social growth campaign will have your socials come alive.With constant growth and engagement you will be sure to have the thriving you’ve been looking for.";
  text3 = "Done right, branding offers a company an edge over the competition. So what exactly is branding, and why is it important for companies to integrate a well-rounded branding and media strategy?";
  text4 = "We will pair your business with influencers that speak to your audience. Influencer Marketing is the most effective way to reach a loyal audience.";
  text5 = "Our ad campaigns will bring you the results your looking for. From brand awareness campaigns to lead funnels, we have got the tools to create the right ads for your business. Our re-targeting campaigns will be sure to get your visitors coming back to your site.";
  text6 = "We can create and provide your company with the best content marketing for your socials to improve online presence. Creating valuable and quality content helps boost conversions and improve customer retention.";
  constructor() { }

  ngOnInit(): void {
  }

}
