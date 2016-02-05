#! /usr/bin/python
# coding = utf-8

# patent application parse
# author: steven
# date: 2016/02/02

import re

# read html file
htmlText = open("html.txt").read().decode("utf-8")

# match all table elements <tr>
class Application : 
    appNum = u''
    applicator = u''
    appName = u''
    
trs = re.findall(r'([\s\S]*?)</tr>', htmlText)
apps = []   # list of application objects
for trItem in trs:
    appGroup = re.findall(r'>(?P<applicationNumber>\d+X?)</a></td>', trItem)
    applicatorGroup = re.findall(ur'>(?P<applicator>[(; )\u4E00-\u9FFF]+)</a> </td>', trItem)
    appNameGroup = re.findall(ur'>(?P<applicationName>[a-zA-Z\u4E00-\u9FFF\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b]+)</a></td>', trItem)
    app = Application()
    if appGroup != []:
        app.appNum = appGroup[0]
    if applicatorGroup != []:
        app.applicator = applicatorGroup[0]
    if appNameGroup != []:
        app.appName = appNameGroup[0]
    apps.append(app)

print len(apps)
for appItem in apps:
    print appItem.appNum, appItem.applicator, appItem.appName
