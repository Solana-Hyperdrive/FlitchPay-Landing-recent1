import React from 'react'
import { GithubLogo } from './Github'
import { FacebookLogo } from './Facebook'
import { TwitchLogo } from './Twitch'
import { YoutubeLogo } from './Youtube'
import { TiktokLogo } from './Tiktok'
import { TwitterLogo } from './Twitter'
import { LinkedinLogo } from './Linkedin'

export function SocialLogo({name}:{name:string}) {
    if(name=="Github"){
        return <GithubLogo/>
    }
    if(name=="Twitter"){
        return <TwitterLogo/>
    }
    if(name=="Facebook"){
        return <FacebookLogo/>
    }
    if(name=="Twitch"){
        return <TwitchLogo/>
    }
    if(name=="Youtube"){
        return <YoutubeLogo/>
    }
    if(name=="Tiktok"){
        return <TiktokLogo/>
    }
    if(name=="Linkedin"){
        return <LinkedinLogo/>
    }

}
