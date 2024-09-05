import content from "@/json";

export function getContentHome() {
  return {
    videoBanner: content?.home?.videoBanner,
    title: content?.home?.title,
    welcomeEvents: content?.home?.welcomeEvents,
    events: content?.events
  };
}

export function getContentSocialMedia(){
    return content?.social
}

export function getContentEvents(){
  return content?.events
}