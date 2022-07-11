import axios from 'axios'
import getPdfLink from './getPdfLink'

const ARTICLE_URL = 'https://ieeexplore.ieee.org/abstract/document/7203009/'

const MOCK_RESPONSE = `<html>
<head>
    <title>Sci-Hub |  [IEEE 2015 IEEE/ACM 37th IEEE International Conference on Software Engineering (ICSE) - Florence, Italy (2015.5.16-2015.5.24)] 2015 IEEE/ACM 37th IEEE International Conference on Software Engineering - Virtual Reality in Software Engineering: Affordances, Applications, and Challenges | 10.1109/ICSE.2015.191</title>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width"/>
<script src="//img.sci-hub.shop/scihub/jquery-3.3.1.min.js"></script>
</head>
<body>
<script type = "text/javascript">
        function clip(element)
        {
          var $temp = $("<input>");
          $("body").append($temp);
          $temp.val($(element).text()).select();
          document.execCommand("copy");
          $temp.remove();
        }
</script>
<style type="text/css">
            html,
            body {
                height: 100%;
                width: 100%;
                margin: 0;
                overflow: hidden;
            }
            div {
                font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
            }

            #menu {
                width: 370px;
                height: 100%;
                position: fixed;
                z-index: 1;
                top: 0;
                left: 0;
                background-color: white;
                overflow-x: hidden;
            }

            #header {
                cursor: pointer;
            }
            #logo {
                background: url("//img.sci-hub.shop/scihub/ravenround.gif") no-repeat;
                width: 165px;
                height: 157px;
                margin-left: 18px;
            }
            #sci {
                background: #bbb;
                color: white;
                margin: 50px 0 0 10px;
                padding: 5px 20px 5px 25px;
                font-size: 38px;
            }
            #sci:hover {
                background: #b22222;
            }
            #motto {
                color: #999;
                margin: 18px 0 0 24px;
                font-size: 18px;
            }

            #buttons {
                margin-top: 55px;
                width: 100%;
                font-size: 22px;
            }
            #buttons a {
                color: #999;
                text-decoration: none;
            }
            #buttons a:hover {
                color: #999;
            }
            #buttons ul {
                margin: 0;
                padding: 0;
                margin-left: 12px;
            }
            #buttons ul li {
                display: inline;
                margin-left: 6px;
                padding: 12px;
            }
            #buttons ul li:hover {
                border: solid 1px #999;
                border-radius: 8px;
            }

            #citation {
                margin: 48px 25px 0 25px;
                font-size: 16px;
                cursor: pointer;
            }
            #citation:active {
                color: #aaa;
            }
            #citation a {
                color: #666;
                text-decoration: none;
            }
            #citation a:hover {
                text-decoration: underline;
            }

            #description {
                margin: 25px 0 0 0;
                text-align: center;
                font-size: 16px;
                width: 100%;
                padding: 12px 24px 12px 0;
            }
            #description a {
                color: green;
                text-decoration: none;
            }

            #link {
                margin: 12px 0 0 25px;
                font-size: 16px;
                color: #aaa;
            }
            #link a {
                color: #aaa;
                text-decoration: underline;
            }

            #versions {
                margin: 18px 0 0 25px;
                font-size: 12px;
                color: #aaa;
            }
            #versions a {
                color: black;
                text-decoration: none;
            }
            #versions a:hover {
                text-decoration: underline;
            }

            #social {
                margin: 25px;
                text-align: center;
                font-size: 16px;
                color: #aaa;
            }
            #social a {
                color: #333;
                text-decoration: none;
            }
            #social a:hover {
                color: #b22222;
            }

            #creator {
                margin: 25px;
                text-align: center;
                font-size: 16px;
                color: #aaa;
            }
            #creator a {
                color: #333;
                text-decoration: none;
            }
            #creator a:hover {
                color: #b22222;
            }

            #article {
                margin-left: 390px;
                height: 100%;
            }
            iframe {
                width: 100%;
                height: 100%;
            }

            td {
                vertical-align: top;
            }

            #warning {
                color: red;
                font-family: serif;
                text-align: center;
                margin: 8px 0 0 16px;
            }
            #warning a {
                color: red;
            }
</style>
<div id="menu">
    <table onclick="window.open('/')">
        <tr>
            <td>
                <div id="logo"></div>
            </td>
            <td>
                <div id="sci">
                    <nobr>sci-hub</nobr>
                </div>
                <div id="motto">to open science</div>
            </td>
        </tr>
    </table>

    <div id="buttons">
        <ul>
                <li id = "reload"><a target = "_blank" href = "//scholar.google.com/">⇣ Google Scholar</a></li>
            <li><a href="#" onclick="location.href='https:\/\/sci.bban.top\/pdf\/10.1109\/ICSE.2015.191.pdf?download=true'">⇣ save</a></li>
        </ul>
    </div>

    <div id="warning"></div>

    <div id="citation" onclick="clip(this)">
        Elliott, Anthony; Peiris, Brian; Parnin, Chris  (2015). <i> [IEEE 2015 IEEE/ACM 37th IEEE International Conference on Software Engineering (ICSE) - Florence, Italy (2015.5.16-2015.5.24)] 2015 IEEE/ACM 37th IEEE International Conference on Software Engineering - Virtual Reality in Software Engineering: Affordances, Applications, and Challenges. , (), 547–550.
        </i> doi:10.1109/ICSE.2015.191&nbsp;
    </div>

    <div id="link">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:250px"
     data-ad-client="ca-pub-4788083219224278"
     data-ad-slot="4859960692"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
<br/>
<script>var allurl=window.location.href;window.history.pushState({}, 0, "https://" + window.location.host);</script>
<script>setTimeout(function() {  window.history.pushState({}, 0, allurl);  }, 1000);</script>
        url to share this paper:<br/>
        <a id="share">
            <nobr id="share-text"></nobr>
        </a>
    </div>

    <div id="versions"></div>

    <div id="description" onclick="window.open('/support')">
        Sci-Hub is a project<br/>
        to make knowledge free.<br/>
        <a target="_blank" href="/support/">support →</a>
    </div>

    <div id="social">updates on <a target="_blank" href="//twitter.com/Sci_Hub">twitter</a></div>

</div>

<div id="article">
    <iframe src="https://sci.bban.top/pdf/10.1109/ICSE.2015.191.pdf#view=FitH" id="pdf"></iframe>
</div>
<script type="text/javascript">
     document.getElementById("share").href = window.location.href
     document.getElementById("share-text").innerHTML = window.location.href

</script>
</body>
</html>`

jest.mock('axios')

beforeAll(() => {
  ;(axios.post as jest.Mock).mockResolvedValue({
    data: MOCK_RESPONSE,
  })
})

describe('getPdfLink', () => {
  it('should return a PDF link for an article link', async () => {
    const pdfLink = await getPdfLink(ARTICLE_URL)
    expect(pdfLink).toBe('https://sci.bban.top/pdf/10.1109/ICSE.2015.191.pdf')
  })

  it("should return null if it can't find the link", async () => {
    ;(axios.post as jest.Mock).mockResolvedValue({
      data: 'Empty response',
    })

    const pdfLink = await getPdfLink(ARTICLE_URL)
    expect(pdfLink).toBeNull()
  })
})
