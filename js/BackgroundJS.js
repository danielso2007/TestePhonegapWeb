




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>phonegap-background/www/BackgroundJS.js at ab89bcb9287685092504e462501d131185ecb1e9 · hazemhagrass/phonegap-background</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="hazemhagrass/phonegap-background" name="twitter:title" /><meta content="Contribute to phonegap-background development by creating an account on GitHub." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/3625423?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/3625423?s=400" property="og:image" /><meta content="hazemhagrass/phonegap-background" property="og:title" /><meta content="https://github.com/hazemhagrass/phonegap-background" property="og:url" /><meta content="Contribute to phonegap-background development by creating an account on GitHub." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="BB66871A:6EBC:996BC3:537F8DA7" name="octolytics-dimension-request_id" /><meta content="1641606" name="octolytics-actor-id" /><meta content="danielso2007" name="octolytics-actor-login" /><meta content="253163dd99cfe26b86e8e6cbbba9d6ff769801ffc5f49d202df23388d1102b14" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="F1WTVo5MHKcLIw0iM8zfuMXvydARVgq++LFV0Ehzxiw6RY/izxUZpPe4VrlURhU+G8KGhAyRmKcGfeZbCxVOsA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-a5b1ed2a59619f83449f49f1af15d646a0a9d0fd.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-bd182415a0e932f312acd620bb460b01270e93d9.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="296d4a7783891e3920ce292d67085538">

      
  <meta name="description" content="Contribute to phonegap-background development by creating an account on GitHub." />

  <meta content="3625423" name="octolytics-dimension-user_id" /><meta content="hazemhagrass" name="octolytics-dimension-user_login" /><meta content="12924868" name="octolytics-dimension-repository_id" /><meta content="hazemhagrass/phonegap-background" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="12924868" name="octolytics-dimension-repository_network_root_id" /><meta content="hazemhagrass/phonegap-background" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/hazemhagrass/phonegap-background/commits/ab89bcb9287685092504e462501d131185ecb1e9.atom" rel="alternate" title="Recent Commits to phonegap-background:ab89bcb9287685092504e462501d131185ecb1e9" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="danielso2007"
      data-repo="hazemhagrass/phonegap-background"
      data-branch="ab89bcb9287685092504e462501d131185ecb1e9"
      data-sha="32b091210f5b57cd682b4b220bcc942979753fe0"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="hazemhagrass/phonegap-background" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/danielso2007" class="name">
        <img alt="Daniel Oliveira" class=" js-avatar" data-user="1641606" height="20" src="https://avatars3.githubusercontent.com/u/1641606?s=140" width="20" /> danielso2007
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-sign-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="hazemhagrass/phonegap-background">This repository</span>
    </li>
      <li>
        <a href="/hazemhagrass/phonegap-background/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="cyS9Db/KysKfl9T9keMnGzem9Mz31K7+nTJXUUJPUqP3PS+mChbmce/UhaoHDEdA68R6nAkHy94fB4CH+hIlag==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="12924868" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/hazemhagrass/phonegap-background/watchers">
        7
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-x js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/hazemhagrass/phonegap-background/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="s2oy4/TsqpiP9WqjGQbAeLMbGyAs1gYl7BQsb8l8OxDVlIcsmTS1Vp01lmM7GbhT1CBtJLGXPhFIkaBrNDfBTw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar hazemhagrass/phonegap-background">
        <span class="octicon octicon-star"></span><span class="text">Unstar</span>
      </button>
        <a class="social-count js-social-count" href="/hazemhagrass/phonegap-background/stargazers">
          13
        </a>
</form>
    <form accept-charset="UTF-8" action="/hazemhagrass/phonegap-background/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="5PpHlaRzmwIzTZwCeDtepdTSU7ZkO9bfSiRc9oi/Oe0UitKCdFYttw+xmwPik1WpjzfmhhTA4U2KQg53wxcPMw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star hazemhagrass/phonegap-background">
        <span class="octicon octicon-star"></span><span class="text">Star</span>
      </button>
        <a class="social-count js-social-count" href="/hazemhagrass/phonegap-background/stargazers">
          13
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/hazemhagrass/phonegap-background/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of hazemhagrass/phonegap-background to your account" aria-label="Fork your own copy of hazemhagrass/phonegap-background to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span><span class="text">Fork</span>
          </a>
          <a href="/hazemhagrass/phonegap-background/network" class="social-count">3</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/hazemhagrass" class="url fn" itemprop="url" rel="author"><span itemprop="title">hazemhagrass</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/hazemhagrass/phonegap-background" class="js-current-repository js-repo-home-link">phonegap-background</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/hazemhagrass/phonegap-background" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /hazemhagrass/phonegap-background">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/hazemhagrass/phonegap-background/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /hazemhagrass/phonegap-background/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>1</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/hazemhagrass/phonegap-background/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /hazemhagrass/phonegap-background/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/hazemhagrass/phonegap-background/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /hazemhagrass/phonegap-background/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/hazemhagrass/phonegap-background/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /hazemhagrass/phonegap-background/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/hazemhagrass/phonegap-background/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /hazemhagrass/phonegap-background/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/hazemhagrass/phonegap-background/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /hazemhagrass/phonegap-background/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/hazemhagrass/phonegap-background.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/hazemhagrass/phonegap-background.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:hazemhagrass/phonegap-background.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:hazemhagrass/phonegap-background.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/hazemhagrass/phonegap-background" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/hazemhagrass/phonegap-background" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/hazemhagrass/phonegap-background/archive/ab89bcb9287685092504e462501d131185ecb1e9.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download hazemhagrass/phonegap-background as a zip file"
                   title="Download hazemhagrass/phonegap-background as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/hazemhagrass/phonegap-background/blob/ab89bcb9287685092504e462501d131185ecb1e9/www/BackgroundJS.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:0e1e171c84a1878df08652b8db2b16b4 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/hazemhagrass/phonegap-background/find/ab89bcb9287685092504e462501d131185ecb1e9" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref=""
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>tree:</i>
    <span class="js-select-button">ab89bcb928</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/hazemhagrass/phonegap-background/blob/master/www/BackgroundJS.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/hazemhagrass/phonegap-background/tree/ab89bcb9287685092504e462501d131185ecb1e9" data-branch="ab89bcb9287685092504e462501d131185ecb1e9" data-direction="back" data-pjax="true" itemscope="url" rel="nofollow"><span itemprop="title">phonegap-background</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/hazemhagrass/phonegap-background/tree/ab89bcb9287685092504e462501d131185ecb1e9/www" data-branch="ab89bcb9287685092504e462501d131185ecb1e9" data-direction="back" data-pjax="true" itemscope="url" rel="nofollow"><span itemprop="title">www</span></a></span><span class="separator"> / </span><strong class="final-path">BackgroundJS.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="www/BackgroundJS.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="mohamed-salah" class="main-avatar js-avatar" data-user="4408501" height="24" src="https://avatars0.githubusercontent.com/u/4408501?s=140" width="24" />
      <span class="author"><a href="/mohamed-salah" rel="contributor">mohamed-salah</a></span>
      <time datetime="2014-01-28T15:05:42+02:00" is="relative-time" title-format="%Y-%m-%d %H:%M:%S %z" title="2014-01-28 15:05:42 +0200">January 28, 2014</time>
      <div class="commit-title">
          <a href="/hazemhagrass/phonegap-background/commit/f63256557e55bcb64b62abb17347b98b3072749b" class="message" data-pjax="true" title="add dependency plugin and check for iOS platform only">add dependency plugin and check for iOS platform only</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="hazemhagrass" href="/hazemhagrass/phonegap-background/commits/ab89bcb9287685092504e462501d131185ecb1e9/www/BackgroundJS.js?author=hazemhagrass"><img alt="Hazem Hagrass" class=" js-avatar" data-user="3625423" height="20" src="https://avatars1.githubusercontent.com/u/3625423?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="mohamed-salah" href="/hazemhagrass/phonegap-background/commits/ab89bcb9287685092504e462501d131185ecb1e9/www/BackgroundJS.js?author=mohamed-salah"><img alt="mohamed-salah" class=" js-avatar" data-user="4408501" height="20" src="https://avatars0.githubusercontent.com/u/4408501?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Hazem Hagrass" class=" js-avatar" data-user="3625423" height="24" src="https://avatars1.githubusercontent.com/u/3625423?s=140" width="24" />
            <a href="/hazemhagrass">hazemhagrass</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="mohamed-salah" class=" js-avatar" data-user="4408501" height="24" src="https://avatars0.githubusercontent.com/u/4408501?s=140" width="24" />
            <a href="/mohamed-salah">mohamed-salah</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">executable file</span>
        <span class="meta-divider"></span>
          <span>34 lines (26 sloc)</span>
          <span class="meta-divider"></span>
        <span>1.149 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be on a branch to make or propose changes to this file">Edit</a>
          <a href="/hazemhagrass/phonegap-background/raw/ab89bcb9287685092504e462501d131185ecb1e9/www/BackgroundJS.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/hazemhagrass/phonegap-background/blame/ab89bcb9287685092504e462501d131185ecb1e9/www/BackgroundJS.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/hazemhagrass/phonegap-background/commits/ab89bcb9287685092504e462501d131185ecb1e9/www/BackgroundJS.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be on a branch to make or propose changes to this file">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'>&nbsp;<span class="kd">var</span> <span class="nx">BackgroundJS</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){};</span></div><div class='line' id='LC2'><br/></div><div class='line' id='LC3'>&nbsp;<span class="nx">BackgroundJS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">PInvoke</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">callbackOK</span><span class="p">,</span> <span class="nx">callbackError</span><span class="p">){</span></div><div class='line' id='LC4'>&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">data</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">data</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> </div><div class='line' id='LC5'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC6'>&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">))</span></div><div class='line' id='LC7'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="p">[</span><span class="nx">data</span><span class="p">];</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">device</span><span class="p">.</span><span class="nx">platform</span> <span class="o">==</span> <span class="s2">&quot;iOS&quot;</span><span class="p">)</span></div><div class='line' id='LC10'>&nbsp;&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">callbackOK</span><span class="p">,</span> <span class="nx">callbackError</span><span class="p">,</span> <span class="s1">&#39;BackgroundJS&#39;</span><span class="p">,</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC11'><span class="p">};</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="nx">BackgroundJS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">SetBackgroundSeconds</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">seconds</span><span class="p">,</span> <span class="nx">callbackOK</span><span class="p">,</span> <span class="nx">callbackError</span><span class="p">){</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">.</span><span class="nx">BackgroundJS</span><span class="p">.</span><span class="nx">PInvoke</span><span class="p">(</span><span class="s2">&quot;setBackgroundSeconds&quot;</span><span class="p">,</span> <span class="nx">seconds</span><span class="p">,</span> <span class="nx">callbackOK</span><span class="p">,</span> <span class="nx">callbackError</span><span class="p">);</span></div><div class='line' id='LC15'><span class="p">};</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="nx">BackgroundJS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">LockBackgroundTime</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">callbackOK</span><span class="p">,</span> <span class="nx">callbackError</span><span class="p">){</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">.</span><span class="nx">BackgroundJS</span><span class="p">.</span><span class="nx">PInvoke</span><span class="p">(</span><span class="s2">&quot;lockBackgroundTime&quot;</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">callbackOK</span><span class="p">,</span> <span class="nx">callbackError</span><span class="p">);</span></div><div class='line' id='LC19'><span class="p">};</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'><span class="nx">BackgroundJS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">UnlockBackgroundTime</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">callbackOK</span><span class="p">,</span> <span class="nx">callbackError</span><span class="p">){</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">.</span><span class="nx">BackgroundJS</span><span class="p">.</span><span class="nx">PInvoke</span><span class="p">(</span><span class="s2">&quot;unlockBackgroundTime&quot;</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">callbackOK</span><span class="p">,</span> <span class="nx">callbackError</span><span class="p">);</span></div><div class='line' id='LC23'><span class="p">};</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><span class="nx">cordova</span><span class="p">.</span><span class="nx">addConstructor</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;constractor&#39;</span><span class="p">);</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">Cordova</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">Cordova</span> <span class="o">=</span> <span class="nx">cordova</span><span class="p">;</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">)</span> <span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">.</span><span class="nx">BackgroundJS</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">BackgroundJS</span><span class="p">();</span></div><div class='line' id='LC34'><span class="p">});</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04963s from github-fe131-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-5bef6dacd990ce272ec009917ceea0b9d96f84b7.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-1b13ad871c0387dc91be6a720577ab10d28b22af.js" type="text/javascript"></script>
      
      
  </body>
</html>

