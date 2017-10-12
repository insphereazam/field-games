var clubs_index_club = '{{#each this}}' +
                            '<li><a href="http://{{url_prefix}}.' + blogsHostURL + '" style="background:none repeat scroll 0 0 {{hex_color}};" target="_blank">' +
                                '<div class="img-thumbnail"><img src="{{logoImageURL}}" alt="{{title}}" class="img-responsive"></div>' +
                                '<div class="description">' +
                                    '<div class="fullwidth">' +
                                        '<h4>{{title}}</h4>' +
                                        '<p>{{club_name}}</p>'+
                                        '<button type="button" class="{{#loggedUser this.status}} {{else}} forceLogin {{/loggedUser}} follow {{#if following}}selected{{/if}}" aria-label="Like" data-id="{{id}}" data-status="{{#if following}}unfollow{{else}}follow{{/if}}">'+
                                           '<i class="fa fa-star"></i>Follow'+
                                        '</button>'+
                                    '</div>' +
                               '</div>' +
                            '</a></li>' +
                        '{{/each}}';
                    
var popular_blogs_popular = '{{#each this}}' +
                            '<li><a href="http://{{url_prefix}}.' + blogsHostURL + '" target="_blank">'+
                            '<button type="button" class="like {{#loggedUser this.status}} FollowBlog {{else}} forceLogin {{/loggedUser}} {{#if following}}selected{{/if}}" aria-label="Like" data-id="{{id}}" data-status="{{#if following}}unfollow{{else}}follow{{/if}}"><span aria-hidden="true"><i class="fa fa-star"></i></span></button>' +
                                '<span class="post-count">{{cnt}} {{popularBy filter}}</span>' +
                                '<div class="img-thumbnail"><img src="{{logoImageURL}}" alt="{{title}}" class="img-responsive"></div>'+
                                '<div class="description">' +
                                    '<h4 class="title-ellipsis">{{title}}</h4>' +
                                    '<p>by {{display_name}}</p>' +
                               '</div>' +
                            '</a></li>' +
                        '{{/each}}';
                    
var popular_writers_popular = '{{#each this}}' +
                            '<li><a href="'+ baseHttpPath +'/profile/{{username}}"><button data-id="{{id}}" data-status="{{#if following}}unfollow{{else}}follow{{/if}} type="button" class="like {{#loggedUser this.status}} FollowUnfollowUser {{else}} forceLogin {{/loggedUser}} {{#if following}}selected{{/if}}" aria-label="Like"><span aria-hidden="true"><i class="fa fa-star"></i></span></button>' +
                                '<span class="post-count">{{cnt}} {{writerBy filterType}}</span>' +
                                '<div class="img-thumbnail"><img src="{{profileImageURL}}" alt="{{username}}" class="img-responsive"></div>'+
                                '<div class="description">' +
                                    '<h4>{{firstname}} {{lastname}}</h4>' +
                                    '<p>View Profile</p>' +
                               '</div>' +
                            '</a></li>' +
                        '{{/each}}';
                    
var search_fanssearch_search = '{{#each this}}' +
                                    '<div class="posts-grid" data-id="{{id}}"><a href="{{postUrl}}">'+
                                        '<div class="placeholder">'+
                                            '<div class="img-thumbnail"><img src="{{postImageURL}}" alt="{{title}}" class="img-responsive"></div>'+
                                            '<div class="posts-excerpt">'+
                                                '<h5 class="game-code upper {{sportClass}}">{{sportTitle}} <span class="time text-right">{{timeElapsed}}</span></h5>'+
                                                '<h4 class="game-title">{{title}}</h4>'+
                                                '<p>{{excerpt}}</p>'+
                                                '<div class="caption">'+
                                                    '<div class="admin-circle"><img alt="Avatar" src="{{userProfileThumb}}" class="img-responsive"></div>'+
                                                    '<div><p>by <span class="green">{{display_name}}</span></p></div>'+
                                                    '<div class="share-post"><span class="hidden-xs hidden-sm"> {{total_shares}} shares</span> <span class="share"><i class="fa fa-share"></i></span></div>'+
                                                '</div>'+
                                            '</div>'+
                                    '</div>'+
                               '{{/each}}';
                           
var userblogs_connect_hashtags = '{{#each this}}' +
                                    '<li><div class="row">'+
                                        '<div class="col-md-12 col-sm-12 col-xs-13">'+
                                            '<div class="social-caption">{{hashTag}}</div>'+
                                        '</div>'+
                                        '<div class="col-md-4 col-sm-4 col-xs-3" style="margin-top:-5px;">'+
                                            '<a data-blogid="{{blogId}}" data-id="{{tagId}}" href="#" class="button trans button-remove hash-tag-remove" data-type="{{type}}">'+
                                                '<i class="fa fa-remove"></i>'+
                                            '</a>'+
                                        '</div>'+
                                    '</div></li>'+
                                '{{/each}}';
                            
var userblogs_createeditblog_tags = '{{#each this}}' +
                                        '<a title="{{inputValue}}" id="" class="tag"><span>{{inputValue}}</span><b title="Remove tag">x</b></a>'+
                                    '{{/each}}';

var userblogs_permissions_blog = '{{#each this}}' +
                                    '<li><a class="add-author" href="#" data-id="{{id}}" data-blogid="{{thisBlogId blog}}" data-referer="modal-box">'+
                                        '<button class="close add-author" aria-label="Close" type="button" data-id="{{id}}" data-blogid="{{thisBlogId blog}}" data-referer="modal-box"><span aria-hidden="true"><i class="fa fa-plus"></i></span></button>'+
                                        '<div class="img-thumbnail"><img src="{{profileImageURL}}" alt="{{username}}" class="img-responsive"></div>'+
                                        '<div class="description">'+
                                            '<h4>{{firstname}} {{lastname}}</h4>'+
                                            '<p>{{username}}</p>'+
                                        '</div>'+
                                        '</a></li>'+
                                '{{/each}}';

var userblogs_permissions_writers = '<li class="writer-{{id}}"><a href="'+ baseHttpPath +'/profile/{{username}}">'+
                                        '<button type="button" class="close remove-author" aria-label="Close" onclick="return false;" data-id="{{id}}" data-blogid="{{thisBlog id}}">'+
                                            '<span aria-hidden="true"><i class="fa fa-close"></i></span>'+
                                        '</button>'+
                                        '<div class="img-thumbnail"><img src="{{profileImageURL}}" alt="{{username}}" width="88"></div>'+
                                        '<div class="description">'+
                                            '<h4>{{firstname}} {{lastname}}</h4>'+
                                            '<p>View Profile</p>'+
                                        '</div>'+
                                    '</a></li>';
                                
var userblogs_blog_loadposts = '{{#each this}}'+
                                '<li id="postId_{{id}}" class="{{published_status}}"><a href="{{post_url}}">'+
                                    '<div class="img-thumbnail"><img src="{{postThumbImage}}" alt="" class="img-responsive"></div>'+
                                    '<div class="description no">'+
                                        '<div class="row">'+
                                            '<div class="col-md-10 col-sm-10 col-xs-16">'+
                                                '<h4>{{title}}</h4>'+
                                                '<p class="post-status"><span>{{published_status}}</span> <span>{{timeElapsed}}</span></p>'+
                                            '</div>'+
                                            '<div class="col-md-6 col-sm-6 col-xs-16">'+
                                                '<ul class="descr-button">'+
                                                    '<li><button type="button" data-id="{{id}}" class="deletePost" data-type="{{postType}}"><i class="fa fa-trash"></i><br>Delete</button></li>'+
                                                    '<li class="selected"><button type="button" onClick="window.location=\''+ baseHttpPath +'/post/edit/{{id}}\'; return false;"><i class="fa fa-cog"></i><br>Edit</button></li>'+
                                                    '<li><button type="button" onClick="window.location=\'{{post_url}}\'; return false;"><i class="fa fa-arrow-circle-right"></i><br>View</button></li>'+
                                                '</ul>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</a></li>'+
                                '{{/each}}';
                            
                            
var home_blog_posts = '{{#each this}}'+
                            '{{#ifIsEmpty source}}'+
                            '<div class="posts-grid"><a href="/article/index/{{post_id}}/{{slug}}">'+
                                '<div class="placeholder">'+
                                    '<div class="img-thumbnail"><img src="{{postImage}}" alt="{{title}}" class="oy lazyload img-responsive">'+
                                        '<div class="overlay">'+
                                            '<button type="button" class="btnmove"><i class="fa fa-arrows"></i></button>'+
                                            '<button type="button" class="btnhide"><i class="fa fa-eye-slash"></i>Hide</button>'+
                                            '<button type="button" class="btnhide"><i class="fa fa-heart-o"></i>Feature</button>'+
                                            '<button type="button" class="btnhide"><i class="fa fa-edit"></i>Edit</button>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="posts-excerpt">'+
                                        '<h5 class="game-code upper {{sport_nick}}">{{sport_nick}} <span class="time text-right">{{created_at}}</span></h5>'+
                                        '<h4 class="game-title">{{title}}</h4>'+
                                        '<p>{{excerpt}}</p>'+
                                        '<div class="caption">'+
                                            '<div class="admin-circle"><img alt="Avatar" src="{{userThumb}}" class="img-responsive"></div>'+
                                            '<div><p>by <span class="green">{{display_name}}</span></p></div>'+
                                            '<div class="share-post"><span class="hidden-xs hidden-sm">{{shares}} shares</span> <span class="share"><i class="fa fa-share"></i></span></div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</a></div>'+
                            '{{else}}'+
                            '<div class="posts-grid social"><a href="#">'+
                                    '<div class="placeholder">'+
                                        '<div class="social-caption">'+
                                            '<div class="admin-circle"><img alt="{{firstname}}" src="{{userThumb}}" class="img-responsive"></div>'+
                                            '<div class="username">{{firstname}}</div>'+
                                            '<div class="author">@{{toLowerCase firstname}}</div>'+
                                            '<span class="time text-right">{{created_at}}</span>'+
                                            '<div class="social-icon-display"><i class="fa fa-{{source}}"></i></div>'+
                                        '</div>'+
                                        '<div class="img-thumbnail"><img src="{{postImage}}" alt="" class="oy lazyload img-responsive"></div>'+
                                        '<div class="posts-excerpt">'+
                                            '<p>{{excerpt}}</p>'+
                                        '</div>'+
                                    '</div>'+
                                '</a></div>'+
                            '{{/ifIsEmpty}}'+
                                '{{/each}}';
                            
var userblogs_connect_sources = '{{#each this}}' +
                                    '<li><a class="add-source" data-id="{{thisBlog blogId}}" data-ref="{{id}}" href="#">' +
                                        '<button class="close" aria-label="Close" type="button" data-id="{{thisBlog blogId}}" data-ref="{{id}}" data-referer="modal-box"><span aria-hidden="true"><i class="fa fa-plus"></i></span></button>'+
                                        '<div class="img-thumbnail"><img src="{{logoImageURL}}" alt="" class="img-responsive"></div>'+
                                        '<div class="description">' +
                                            '<h4>{{title}}</h4>' +
                                            '<p>by {{displayName}}</p>' +
                                       '</div>' +
                                    '</a></li>' +
                                '{{/each}}';
                            
var userblogs_connect_addedSources = '<li><a data-id="{{thisBlog blogId}}" data-ref="{{id}}" href="http://{{url_prefix}}.'+ blogsHostURL  +'">' +
                                        '<button class="close remove-source" aria-label="Close" type="button"  data-id="{{thisBlog blogId}}" data-ref="{{id}}"><span aria-hidden="true"><i class="fa fa-close"></i></span></button>'+
                                        '<div class="img-thumbnail"><img src="{{logoImageURL}}" alt="" class="img-responsive"></div>'+
                                        '<div class="description">' +
                                            '<h4>{{title}}</h4>' +
                                            '<p>by {{display_name}}</p>' +
                                       '</div>' +
                                    '</a></li>';

var home_scores_fetchScores = '{{#each this}} <div class="owl-item" style="width: 300px;">'+
                                    '<div class="item">'+
                                        '<div class="col-md-16 scores-item">'+
                                            '<div class="scores-block-element">'+
                                                '<table class="table">'+
                                                    '<thead>'+
                                                        '<tr class="{{classNick}}">'+
                                                            '<th colspan="3" style="padding-left:0px;padding-right:0px;">'+
                                                            '<table width="100%" cellpadding="0" cellspacing="0">'+
                                                            '<tr><th width="33%">{{sportTitle}} </th>'+
                                                            '<th style="text-align:center;">{{startDate}}</span></th>'+
                                                            '<th width="33%">{{matchStatus}}</th></tr></table></th>'+
                                                        '</tr>'+
                                                    '</thead>'+
                                                    '<tbody>'+
                                                        '<tr>'+
                                                            '<td width="8%"><span class="flag"><img class="lazyload"  src="{{team1Logo}}" width="19"></span></td>'+
                                                            '<td>{{homeSquadName}}</td>'+
                                                            '<td>{{homeSquadScore}}</td>'+
                                                        '</tr>'+
                                                        '<tr>'+
                                                            '<td width="8%"><span class="flag"><img class="lazyload"  src="{{team2Logo}}" width="19"></span></td>'+
                                                            '<td>{{awaySquadName}}</td>'+
                                                            '<td>{{awaySquadScore}}</td>'+
                                                        '</tr>'+
                                                    '</tbody>'+
                                                '</table>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div></div>'+
                                    '{{/each}}';
                                
var home_widget_fixtures = '{{#each this}}'+
                                '<li>'+
                                    '<div class="row">'+
                                        '<div class="col-lt">'+
                                            '<span class="flag"><img src="{{team1FlagImage}}" alt="" class="img-responsive"></span>'+
                                            '<span class="title">{{team1Name}}</span>'+
                                        '</div>'+
                                        '<div class="col-rt">{{dateStr}}</div>'+
                                    '</div>'+
                                    '<div class="row">'+
                                        '<div class="col-lt">'+
                                            '<span class="flag"><img src="{{team2FlagImage}}" alt="" class="img-responsive"></span>'+
                                            '<span class="title">{{team2Name}}</span>'+
                                        '</div>'+
                                        '<div class="col-rt">{{timeStr}}</div>'+
                                    '</div>'+
                                '</li>'+                            
                           '{{/each}}';