import re
import os
import googleapiclient.discovery
from dotenv import load_dotenv

load_dotenv()

youtube_key = os.getenv('YOUTUBEAPIKEY')

def get_video_id(url):
    video_id = re.search(r"v=([a-zA-Z0-9_-]{11})", url)
    if video_id:
        return video_id.group(1)
    else:
        return None

def get_comments(video_url):
    api_key = youtube_key
    video_id = get_video_id(video_url)
    if not video_id:
        return ValueError("Invalid YouTube URL")


    youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)

    # Fetch the video comments
    comments = []
    request = youtube.commentThreads().list(
        part="snippet",
        videoId=video_id,
        maxResults=400,
        textFormat="plainText"
    )
    response = request.execute()

    # Extract and store the comments
    for item in response['items']:
        comment = item['snippet']['topLevelComment']['snippet']['textDisplay']
        comments.append(comment)

    return comments
