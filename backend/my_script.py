# import pandas as pd
# import numpy as np
# import re
# import datetime
# import warnings 
# import pymongo
# warnings.filterwarnings('ignore')
# from pymongo import MongoClient
# print('hi')
# for num in range(1, 21):
#     print(num)

#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import re
import datetime


# In[2]:


import warnings 
warnings.filterwarnings('ignore')


# In[3]:


from pymongo import MongoClient


# In[4]:


connection_string = 'mongodb+srv://chaba:ironhack01@cluster0-0i68o.azure.mongodb.net/test?'
client = MongoClient(connection_string)


# In[5]:


database = client.get_database('test')


# In[6]:


records = database['instaposts']


# In[7]:


data=pd.DataFrame(records.find())


# In[8]:


post=data[['owner_id','text','comment_count','like_count','video_view_count','is_video','date']]


# In[9]:


post=post.fillna(0)


# In[10]:


post['text']=post['text'].astype(str)


# In[11]:


def special(x):
    value = re.findall( '@', x)
    return len(value)


# In[12]:


post['link_count']=list(map(special, post['text']))


# In[13]:


def hashtag(x):
    value = re.findall( '#', x)
    return len(value)


# In[14]:


post['hashtag_count']=list(map(hashtag, post['text']))


# In[15]:


post['hashtag']=list(post.text.str.findall(r'#[A-z]+'))


# In[16]:


post['links']=list(post.text.str.findall(r'@[A-z]+'))


# In[17]:


post['hashtag']=post['hashtag'].astype(str).str.strip('[]')


# In[18]:


post['hashtag']=post['hashtag'].astype(str).str.strip("''")


# In[19]:


post['links']=post['links'].astype(str).str.strip("''")


# In[20]:


post['links']=post['links'].astype(str).str.strip('[]')


# In[21]:


post['text'] = list(map(lambda x: re.sub('[?|!|\'|"|,|\n|\|.]','',x),post['text']))


# In[22]:


post['date']=post['date'].astype(int)


# In[23]:


post['like_count']=post['like_count'].astype(int)


# In[24]:


post['comment_count']=post['comment_count'].astype(int)


# In[25]:


post['video_view_count']=post['video_view_count'].astype(int)


# In[26]:


post['day_post']=list(map(lambda x: datetime.datetime.fromtimestamp(x).strftime('%Y-%m-%d'),post['date']))


# In[27]:


post['time_post']=list(map(lambda x: datetime.datetime.fromtimestamp(x).strftime('%H'),post['date']))


# In[28]:


post['time_post']=post['time_post'].astype(int)


# In[29]:


post=post.drop(['date'], axis=1)


# In[30]:


post['day_post'] = pd.to_datetime(post['day_post'], errors='coerce')


# In[31]:


post['day_post']=post['day_post'].dt.day_name()


# In[32]:


def f(x):
    if (x > 4) and (x <= 8):
        return 'Early Morning'
    elif (x > 8) and (x <= 12 ):
        return 'Morning'
    elif (x > 12) and (x <= 16):
        return'Noon'
    elif (x > 16) and (x <= 20) :
        return 'Eve'
    elif (x > 20) and (x <= 24):
        return'Night'
    elif (x <= 4):
        return'Late Night'


# In[33]:


post['time_post']=post['time_post'].apply(f)


# In[34]:


database1 = client.get_database('test')


# In[35]:


records1 = database['instaprofiles']


# In[36]:


data1=pd.DataFrame(records1.find())


# In[37]:


profile=data1[['username','id','business_category_name','biography','is_verified']]


# In[38]:


instagram=profile.merge(post, left_on='id', right_on='owner_id',
          suffixes=('_left', '_right'))


# In[39]:


instagram=instagram.drop(['owner_id'], axis=1)


# In[40]:


instagram['is_verified']=instagram['is_verified'].astype(int)


# In[41]:


instagram['is_video']=instagram['is_video'].astype(int)


# In[51]:


instagram.head(5)


# In[43]:


average_hashtag = round(instagram['hashtag_count'].mean())
print('Average hashtag per publication:',average_hashtag)


# In[44]:


average_link = round(instagram['link_count'].mean())
print('Average external link per publication:',average_link)


# In[45]:


max_likes=round(instagram['like_count'].max())
print('Maximum likes per publication:' , max_likes)


# In[46]:


max_comment=round(instagram['comment_count'].max())
print('Maximun comments per publication:' ,max_comment)


# In[47]:


time_post=pd.DataFrame(instagram['time_post'].value_counts())


# In[48]:


time_post['%_post_time']=list(map(lambda x: (x / (sum(time_post['time_post'])))*100,time_post['time_post']))


# In[49]:


time_post.head(5)


# In[ ]:




