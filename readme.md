# PatentDowload 说明

## 功能

这个Python脚本用来抓取国家知识产权局专利搜索页面的某一个检索式的检索结果，并分析网站上的专利信息，下载所有的关于申请号、申请人、申请日、发明名称、摘要等信息并存档。

比如，目前试图抓取“海洋王”的搜索结果，并反回所有发明信息。

这个脚本包括下面几个部分：
- 根据搜索返回页面，抓取页面上的每一项发明信息，并根据信息里的申请号及javascript脚本，来跳转到详细信息页面去抓取摘要信息，并随时存档。
- 根据“下一页”信息，跳转到下一页，并继续递归查找
- 根据得到的条目信息，存档备用。

## 进度
在网页上首先搜索，分析返回页面，可以得到相关的信息条目是：
'''
<tr>
			<td class="td_td" align="center" bgcolor="#FFFFFF" height="30">21</td>
			<td class="td_td" align="left" bgcolor="#FFFFFF" height="30"><a href="javascript:zl_xm('2010800698047','fmmost','GBINDEX');">2010800698047</a></td>
			<td align="left" bgcolor="#FFFFFF" height="30"><a href="javascript:zl_xm('2010800698047','fmmost','GBINDEX');" class="lana">海洋王照明科技股份有限公司</a> </td>
			<td class="td_td" align="left" bgcolor="#FFFFFF" height="30"><a href="javascript:zl_xm('2010800698047','fmmost','GBINDEX');">一种有机电致发光器件及其制备方法</a></td>
		</tr>
'''

现在对其匹配上出了问题，主要是申请人信息里如果有多个申请人，中间会有英文的分号与一个空格相隔开，这时匹配失败。

后续页数的跳转信息是：
'''
<a href="javascript:zl_fy(3);">&gt;</a>
<span>转到 <input class="w50" id="pn" onkeypress="javascript:if(event.keyCode == 13) zl_tz(327)" type="text"> 页 </span>
'''

