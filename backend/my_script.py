#!/usr/bin/env python
# coding: utf-8

# ### LIBRARIES

# In[1]:


import pandas as pd
import numpy as np
import re
import datetime
import statistics
import seaborn as sns
from matplotlib import pyplot
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from pymongo import MongoClient
import nltk
import gensim


# In[2]:


pd.set_option('display.max_columns',100)


# In[3]:


import warnings 
warnings.filterwarnings('ignore')


# ### DATABASE USERS - TABLE USERS

# In[4]:


connection_string = 'mongodb+srv://chaba:ironhack01@cluster0-0i68o.azure.mongodb.net/test?'
client = MongoClient(connection_string)


# In[5]:


database = client.get_database('test')


# In[6]:


records = database['users']


# In[7]:


datau=pd.DataFrame(records.find())


# In[8]:


datau.head(1)


# ### DATABASE CONNECTION - TABLE INSTAPOSTS

# In[9]:


connection_string = 'mongodb+srv://chaba:ironhack01@cluster0-0i68o.azure.mongodb.net/test?'
client = MongoClient(connection_string)


# In[10]:


database = client.get_database('test')


# In[11]:


records = database['instaposts']


# In[12]:


data=pd.DataFrame(records.find())


# In[13]:


post=data[['owner_id','text','comment_count','like_count','video_view_count','is_video','date']]


# ### DATA CLEANINIG - DATAFRAME INSTAPOSTS = POST

# In[14]:


post=post.fillna(0)


# In[15]:


post['text']=post['text'].astype(str)


# In[16]:


def special(x):
    value = re.findall( '@', x)
    return len(value)


# In[17]:


post['link_count']=list(map(special, post['text']))


# In[18]:


def hashtag(x):
    value = re.findall( '#', x)
    return len(value)


# In[19]:


post['hashtag_count']=list(map(hashtag, post['text']))


# In[20]:


post['hashtag']=list(post.text.str.findall(r'#[A-z]+'))


# In[21]:


post['links']=list(post.text.str.findall(r'@[A-z]+'))


# In[22]:


post['hashtag']=post['hashtag'].astype(str).str.strip('[]')


# In[23]:


post['hashtag']=post['hashtag'].astype(str).str.strip("''")


# In[24]:


post['links']=post['links'].astype(str).str.strip("''")


# In[25]:


post['links']=post['links'].astype(str).str.strip('[]')


# In[26]:


post['text'] = list(map(lambda x: re.sub('[?|!|\'|"|,|\n|\|.]','',x),post['text']))


# In[27]:


post['date']=post['date'].astype(int)


# In[28]:


post['like_count']=post['like_count'].astype(int)


# In[29]:


post['comment_count']=post['comment_count'].astype(int)


# In[30]:


post['video_view_count']=post['video_view_count'].astype(int)


# In[31]:


post['day_post']=list(map(lambda x: datetime.datetime.fromtimestamp(x).strftime('%Y-%m-%d'),post['date']))


# In[32]:


post['time_post']=list(map(lambda x: datetime.datetime.fromtimestamp(x).strftime('%H'),post['date']))


# In[33]:


post['time_post']=post['time_post'].astype(int)


# In[34]:


post=post.drop(['date'], axis=1)


# In[35]:


post['day_post'] = pd.to_datetime(post['day_post'], errors='coerce')


# In[36]:


post['day_post']=post['day_post'].dt.day_name()


# In[37]:


def f(x):
    if (x > 4) and (x <= 8):
        return 'Early Morning (4AM-8Am)'
    elif (x > 8) and (x <= 12 ):
        return 'Morning (8Am-12PM)'
    elif (x > 12) and (x <= 16):
        return'Noon (12-4PM)'
    elif (x > 16) and (x <= 20) :
        return 'Eve (4PM-8PM)'
    elif (x > 20) and (x <= 24):
        return'Night (8PM-12AM)'
    elif (x <= 4):
        return'Late Night (12Am-4AM)'


# In[38]:


post['time_post']=post['time_post'].apply(f)


# ### DATABASE CONNECTION - INSTAPROFILES = PROFILES

# In[39]:


database1 = client.get_database('test')


# In[40]:


records1 = database['instaprofiles']


# In[41]:


data1=pd.DataFrame(records1.find())


# In[42]:


data1=data1.fillna(0)


# In[43]:


profile=data1[['full_name','id','business_category_name','biography','is_verified','edge_followed_by','emlcategory']]


# In[44]:


def clean(x):
    val = re.findall( '\d{1,}', x)
    return val[0]


# In[45]:


profile['edge_followed_by']=profile['edge_followed_by'].astype(str)


# In[46]:


profile['followers']=list(map(clean, profile['edge_followed_by']))


# In[47]:


data1['emlcategory'].unique()


# ### MERGE DATAFRAME POST AND PROFILES = INSTAGRAM 

# In[48]:


instagram=profile.merge(post, left_on='id', right_on='owner_id',
          suffixes=('_left', '_right'))


# In[49]:


instagram = instagram[instagram['emlcategory'] == 'food']


# In[50]:


instagram['followers']=instagram['followers'].astype(int)


# In[51]:


instagram = instagram[instagram['followers'] < 8000000]


# In[52]:


instagram['id']=instagram['id'].astype('int64')


# In[53]:


instagram=instagram.drop(['owner_id'], axis=1)


# In[54]:


instagram=instagram.drop(['emlcategory'], axis=1)


# In[55]:


instagram=instagram.drop(['edge_followed_by'], axis=1)


# In[56]:


instagram['is_verified']=instagram['is_verified'].astype(int)


# In[57]:


instagram['is_video']=instagram['is_video'].astype(int)


# ### POST INFORMATION 

# In[58]:


average_hashtag = round(instagram['hashtag_count'].mean())


# In[59]:


average_link = round(instagram['link_count'].mean())


# In[60]:


max_likes=round(instagram['like_count'].max())


# In[61]:


max_comment=round(instagram['comment_count'].max())


# In[62]:


ave_text_leng=list(map(lambda x: len(x),instagram['text']))


# In[63]:


mean_text=round(statistics.mean(ave_text_leng))


# In[64]:


pa = {'Post_Information':['Average hashtag per publication', 'Average external link per publication', 'Maximum likes per publication', 'Maximun comments per publication','Average text length-Characters per post'], 'Result':[average_hashtag,average_link, max_likes, max_comment,mean_text]}


# In[65]:


post_analysis=pd.DataFrame(pa)


# In[66]:


post_analysis.head(5)


# ### TimeFrame Publication analysis - Weekly

# In[67]:


post_day=pd.DataFrame(instagram['day_post'].value_counts())


# In[68]:


post_day['%_post_weekday']=list(map(lambda x: (x / (sum(post_day['day_post'])))*100,post_day['day_post']))


# In[69]:


post_day['%_post_weekday']=round(post_day['%_post_weekday'])


# In[70]:


post_day=post_day.drop(['day_post'], axis=1)


# In[71]:


likes_d=pd.DataFrame(instagram.groupby('day_post')['like_count'].sum())


# In[72]:


likes_d['likes_per_day(%)']=list(map(lambda x: (x / (sum(likes_d['like_count'])))*100,likes_d['like_count']))


# In[73]:


likes_d['likes_per_day(%)']=round(likes_d['likes_per_day(%)'])


# In[74]:


likes_d=likes_d.drop(['like_count'],axis=1)


# In[75]:


post_day=post_day.reset_index()


# In[76]:


day_week_post_analysis=post_day.merge(likes_d, left_on='index', right_on='day_post',
          suffixes=('_left', '_right'))


# In[77]:


day_week_post_analysis


# In[78]:


x1=(instagram.groupby('day_post')['followers'].sum())


# In[79]:


x2=(instagram.groupby('day_post')['comment_count'].sum())


# In[80]:


x3=(instagram.groupby('day_post')['like_count'].sum())


# In[81]:


y1=((x3+x2)/x1)*100


# In[82]:


eg_day=pd.DataFrame(y1)


# In[83]:


eg_day=eg_day.reset_index()


# In[84]:


weekly_post_analysis=day_week_post_analysis.merge(eg_day, left_on='index', right_on='day_post',
          suffixes=('_left', '_right'))


# In[85]:


weekly_post_analysis=weekly_post_analysis.drop(['day_post'],axis=1)


# In[167]:


weekly_post_analysis.columns


# In[168]:


weekly_post_analysis=weekly_post_analysis.rename(columns={"index": "Week_Day_Post","%_post_weekday": "Week/Day_post%","likes_per_day(%)": "Likes_Rate_Week/Day",0: "Engagement_rate_Week/Day"})


# In[169]:


weekly_post_analysis


# ### Time Publication Analysis - DAY

# In[87]:


time_post=pd.DataFrame(instagram['time_post'].value_counts())


# In[88]:


time_post['%_post_time']=list(map(lambda x: (x / (sum(time_post['time_post'])))*100,time_post['time_post']))


# In[89]:


time_post['%_post_time']=round(time_post['%_post_time'])


# In[90]:


time_post=time_post.drop(['time_post'], axis=1)


# In[91]:


instagram['text_len']=list(map(lambda x: len(x),instagram['text']))


# In[92]:


likes_p=pd.DataFrame(instagram.groupby('time_post')['like_count'].sum())


# In[93]:


likes_p['likes_rate(%)']=list(map(lambda x: (x / (sum(likes_p['like_count'])))*100,likes_p['like_count']))


# In[94]:


likes_p['likes_rate(%)']=round(likes_p['likes_rate(%)'])


# In[95]:


likes_p=likes_p.drop(['like_count'],axis=1)


# In[96]:


time_post=time_post.reset_index()


# In[97]:


day_time_post_analysis=time_post.merge(likes_p, left_on='index', right_on='time_post',
          suffixes=('_left', '_right'))


# In[98]:


x4=(instagram.groupby('time_post')['followers'].sum())


# In[99]:


x5=(instagram.groupby('time_post')['comment_count'].sum())


# In[100]:


x6=(instagram.groupby('time_post')['like_count'].sum())


# In[101]:


y2=((x5+x6)/x4)*100


# In[102]:


eg_time=pd.DataFrame(y2)


# In[103]:


eg_time=eg_time.reset_index()


# In[104]:


hourly_post_analysis=day_time_post_analysis.merge(eg_time, left_on='index', right_on='time_post',
          suffixes=('_left', '_right'))


# In[105]:


hourly_post_analysis=hourly_post_analysis.drop(['time_post'],axis=1)


# In[ ]:


df.rename(columns={"A": "a", "B": "b", "C": "c"}, errors="raise")


# In[165]:


hourly_post_analysis=hourly_post_analysis.rename(columns={"index": "Day_Time_Post", "%_post_time": "%_Post_Day", "likes_rate(%)": "Likes_Rate_Daytime%",0: "Engagement_Rate_day",})


# In[166]:


hourly_post_analysis


# ### TOP 5 Hashtags

# In[107]:


top5_hashtag=pd.DataFrame(instagram.groupby('hashtag')['like_count'].sum())


# In[108]:


top5_hashtag=top5_hashtag.reset_index()


# In[109]:


top5_hashtag=top5_hashtag.sort_values(by='like_count', ascending=False)


# In[110]:


x = top5_hashtag.set_index('hashtag')[1:]


# In[111]:


hashtag_5=x.reset_index()[0:5]


# Top 5 Hashtags

# In[112]:


top_5_hashtag=hashtag_5['hashtag']


# In[113]:


top_5_hashtag


# ### TOP 5 External Links 

# In[114]:


top5_links=pd.DataFrame(instagram.groupby('links')['like_count'].sum())


# In[115]:


top5_links=top5_links.reset_index()


# In[116]:


top5_links=top5_links.sort_values(by='like_count', ascending=False)


# In[117]:


y = top5_links.set_index('links')[1:]


# In[118]:


links_5=y.reset_index()[0:5]


# Top 5 Links

# In[119]:


top_5_links=links_5['links']


# In[120]:


top_5_links


# ### TOP 5 Instagramers 

# In[121]:


top5_instagramers=pd.DataFrame(instagram.groupby('full_name')['like_count'].sum())


# In[122]:


top5_instagramers=top5_instagramers.reset_index()


# In[123]:


top5_instagramers=top5_instagramers.sort_values(by='like_count', ascending=False)


# top 5 instagramers

# In[124]:


top_5_instagramers=top5_instagramers['full_name'][0:5]


# In[125]:


top_5_instagramers


# ### Top 5  Business - Category

# In[126]:


top5_category=pd.DataFrame(instagram.groupby('business_category_name')['like_count'].sum())


# In[127]:


top5_category=top5_category.reset_index()[1:]


# In[128]:


top5_category=top5_category.sort_values(by='like_count', ascending=False)


# top 5 categories

# In[129]:


top_5_categories= top5_category['business_category_name']


# In[130]:


top_5_categories.head(5)


# ### CORRELATION MATRIX

# In[131]:


corr = instagram.corr()
ax = sns.heatmap(
    corr, 
    vmin=-1, vmax=1, center=0,annot=True,
    cmap=sns.diverging_palette(20, 220, n=200),
    square=True)
ax.set_xticklabels(
    ax.get_xticklabels(),
    rotation=45,
    horizontalalignment='right')


# ### VARIABLES CORRELATION ANALYSIS

# In[132]:


sns.regplot(instagram['followers'],instagram['like_count'])


# In[133]:


sns.regplot(instagram['followers'],instagram['comment_count'])


# In[134]:


sns.regplot(instagram['followers'],instagram['video_view_count'], x_estimator=np.mean)


# In[135]:


sns.regplot(instagram['text_len'],instagram['hashtag_count'])


# In[136]:


sns.regplot(instagram['text_len'],instagram['like_count'])


# In[137]:


sns.regplot(instagram['link_count'],instagram['like_count'])


# In[138]:


sns.scatterplot(x="followers", y="like_count", hue="is_verified", data=instagram)
sns.set(rc={'figure.figsize':(10,10)})


# In[139]:


sns.scatterplot(x="followers", y="like_count", hue="business_category_name", data=instagram)
sns.set(rc={'figure.figsize':(10,10)})


# In[140]:


sns.relplot(x='followers', y='like_count', hue="comment_count", size="hashtag_count", data=instagram)
sns.set(rc={'figure.figsize':(15,15)})


# ### INSIGHTS 

# In[141]:


insight_follower_Likes='0 and 2,500,000 Followers'


# In[142]:


insight_follower_comments= 'Between 0 and 3,000,000 Followers'


# In[143]:


insight_follower_video_views = '0 and 2,000,000 Followers'


# In[144]:


insight_text_hashtag='500 charaters and 5 hashtags'


# In[145]:


insight_text_likes= 'Up to 500 Charaters'


# In[146]:


insight_links=' Up to 2 external links'


# In[147]:


insight_verified= "60 % Higher with verified accounts "


# In[148]:


insights=pd.DataFrame({'Action':['Followers Vs Likes','Followers Vs Comments','Followers Vs Video Views','Text Lenght and Hashtags','Post Text Lenght','Post External Links','Account type'],'Recommendation':[insight_follower_Likes,insight_follower_comments,insight_follower_video_views,insight_text_hashtag,insight_text_likes,insight_links,insight_verified]})


# In[149]:


insights


# ### WORD ANALYSIS

# In[150]:


words = []
for comments in instagram['text']:
    temp = re.findall('\w{4,}', comments)
    for item in temp:
        words.append(item)


# In[151]:


wordcloud = WordCloud(width = 800, height = 800, min_font_size = 10).generate(" ".join(words))


# In[152]:


plt.figure(figsize = (8, 8), facecolor = None) 
plt.imshow(wordcloud)
plt.show()


# In[153]:


hashtagwords = []
for comments in instagram['hashtag']:
    temp = re.findall('\w{4,}', comments)
    for item in temp:
        hashtagwords.append(item)


# In[154]:


from gensim import corpora, models, similarities


# In[155]:


x=words


# In[156]:


y=hashtagwords


# In[157]:


corpus = x+y


# In[158]:


tok_corp=[nltk.word_tokenize(sent) for sent in corpus]


# In[159]:


import nltk


# In[160]:


model=gensim.models.Word2Vec(tok_corp,min_count=1,size=32)


# In[170]:


top_5_hashtag


# In[181]:


key_hashtags=[]
for kw in top_5_hashtag:
    temp = re.findall('\w{4,}', kw)
    for item in temp:
        key_hasht.append(item)


# In[184]:


top_10_key_hashtags=key_hashtags[:10]


# In[220]:


top_10_key_hashtags


# In[225]:


key_words={}
def top_key_words(x):
    for item in x:
        key_words[item] = model.most_similar(item)
top_key_words(top_10_key_hashtags)


# In[214]:


#model.most_similar('MothersDay')


# In[232]:


type(key_words)