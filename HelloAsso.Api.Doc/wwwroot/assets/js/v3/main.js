"use strict";

(function Api() {

	// Noms des pages à afficher
	var pageNames = {
		"index": "Introduction",
		"description": "Description de l'API HelloAsso",
		"format": "Format des échanges",
		"responses": "Types des réponses",
		"resources": "Ressources",
		"notifications": "Notifications",
		"public": "API publique"
	}

	// Applique le nom de la page courante au header
	var refreshPageName = function() {
		var url = document.location.pathname;
		var urlSplit = url.substring(url.lastIndexOf('/') + 1);
		var pageTitle = document.querySelector('[data-content="title"]');

		if (pageTitle) {
            pageTitle.innerHTML = pageNames[urlSplit];
		}
	}

	// Surligne la page courante dans la sidebar
	var highlightCurrentPage = function() {
		var url = document.location.pathname;
		var urlSplit = url.substring(url.lastIndexOf('/') + 1);
        var pageLinks = document.querySelectorAll('[data-link="' + urlSplit + '"]');
		
		// Déplie le submenu au clic sur un lien de la sidebar
		for (var i = 0; i < pageLinks.length; i++) {
			var pageLink = pageLinks[i];
			var currentLink = pageLink.querySelector('a');
			var currentSubmenu = pageLink.querySelector('.collapsible');

			window.api.addClass(currentLink, 'current');
			window.api.addClass(currentSubmenu, 'collapsed');
		}
	}

	this.addClass = function(element, className) {
		if (element == null) {
			return;
		}

		if (element.getAttribute('class') == null) {
			element.setAttribute('class', className);
		} else {
			var classes = element.getAttribute('class').split(" ");

			if (classes.indexOf(className) == -1) {
				element.setAttribute('class', element.getAttribute('class') + " " + className);
			}
		}
	}

	// Ajoute une classe sur un élément cible
	this.addClassWithAttribute = function(el) {
		var currentAddClass = el.getAttribute('data-addclass');
		var currentAddClassTarget = el.getAttribute('data-target');
		var target = document.querySelector(currentAddClassTarget);

		window.api.addClass(target, currentAddClass);
	}

	this.removeClass = function(element, className) {
		if (element == null) {
			return;
		}

		if (element.getAttribute('class') != null) {
			var classLeft = element.getAttribute('class').replace(className, '');
			element.setAttribute('class', classLeft);
		}
	}

	// Alterner un état sur un élément via une classe
	this.toggleClass = function(element, className) {
		if (element == null) {
			return;
		}

		var classes = element.getAttribute('class').split(" ");

		if (classes.indexOf(className) == -1) {
			window.api.addClass(element, className);
		} else {
			window.api.removeClass(element, className);
		}
	}

	// Tester si le parent ou son enfant comporte une classe
	this.childOrParentHasClass = function(child, className) {
		var noClass = child.getAttribute('class') == null;
		var classes = [];

		if (!noClass) {
			classes = child.getAttribute('class').split(" ");
		}

		if (classes.indexOf(className) == -1 || noClass) {
			var parent = child.parentNode;
			while (parent != null && parent != document) {
				var noClassParent = parent.getAttribute('class') == null;
				var parentClasses = [];

				if (!noClassParent) {
					parentClasses = parent.getAttribute('class').split(" ");
				}
	
				if (parentClasses.indexOf(className) == -1 || noClassParent) {
					parent = parent.parentNode;
				} else {
					return true;
				}
			}
			return false;
		} else {
			return true;
		}
	}

	// Création du cookie ThemeSaver (enregistrement et application du theme au chargement de la page)
	this.setCookie = function(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
    
    // Smooth Scroll
    this.scrollTo = function(element, to, duration) {
        if (duration < 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop == to) return;
            window.api.scrollTo(element, to, duration - 10);
        }, 10);
    }

    this.scrollToAnchor = function (link) {
        var anchor = link.href.split('#')[1];
        var target = document.getElementById(anchor);

        // Hack IE10 pour savoir si on utilise body ou documentElement
        var oldScroll = document.documentElement.scrollTop;
        document.documentElement.scrollTop = oldScroll + 10;
        var newScroll = document.documentElement.scrollTop;
        document.documentElement.scrollTop = oldScroll;

        var content = document.body;
        if (oldScroll != newScroll) {
            content = document.documentElement;
		}
		
		if (window.innerWidth > 992) {
            setTimeout(window.api.scrollTo(content, target.offsetTop, 500), 250);
	   	} else {
			setTimeout(window.api.scrollTo(content, target.offsetTop - 55, 500), 250);
		}
    };

	this.init = function() {
		refreshPageName();
		highlightCurrentPage();

		// Application ciblée de la fonction addClass 
		var elements = document.querySelectorAll('[data-addclass]');
		for (var elementsIdx = 0; elementsIdx < elements.length; elementsIdx++) {
			var item = elements[elementsIdx];

			item.addEventListener('click', function(event) {
				var current = event.currentTarget;
				window.api.addClassWithAttribute(current);
			});
		}

		// Sélection du theme
		var themeSelector = document.querySelectorAll('[data-theme]');
		for (var i = 0; i < themeSelector.length; i++) {
			
			themeSelector[i].addEventListener('click', function(e) {
				var body = document.querySelector('body');
				var currentTheme = e.currentTarget.getAttribute('data-theme');

				window.api.setCookie('themeSaver', currentTheme, 365);
				
				body.setAttribute('class', '');
				window.api.addClass(body, currentTheme);
				
				var themeSelectorToSelect = document.querySelectorAll('[data-theme]');
				for (var j = 0; j < themeSelectorToSelect.length; j++) {
					if (themeSelectorToSelect[j] != e.currentTarget) {
						window.api.removeClass(themeSelectorToSelect[j], 'theme-active');
					} else {
						window.api.addClass(e.currentTarget, 'theme-active');
					}
				}
			});
		} 

		// Smooth scroll
		var links = document.querySelectorAll('a');
	    for (var i = 0; i < links.length; i++) {
	        if (links[i].href.indexOf('#') > -1) {
	            var anchor = links[i].href.split('#')[1];
	            if (anchor.trim() != '' && document.querySelector('#' + anchor)) {
	                links[i].addEventListener("click", function (e) {
	                    e.preventDefault();
                        window.api.scrollToAnchor(e.currentTarget);
	                });
	            }
	        }
	    }

		// Menu
		var navLinks = document.querySelectorAll('.sidebar-nav li');
		for (var i = 0; i < navLinks.length; i++) {
			var navLink = navLinks[i];

			navLink.addEventListener('click', function(event) {
				var current = event.currentTarget;
				var submenu = current.querySelector('.collapsible');
				var navLinksToCollapse = document.querySelectorAll('.sidebar-nav .collapsible');
				
				for (var j = 0; j < navLinksToCollapse.length; j++) {
					if (navLinksToCollapse[j] != submenu) {
						window.api.removeClass(navLinksToCollapse[j], 'collapsed');
					}
				}

				window.api.toggleClass(submenu, 'collapsed');
			});
		}
		
		// Ouverture/fermeture du menu (responsive)
		document.addEventListener('click', function(event) {
			// Sidebar
			var sidebar = document.querySelector('.sidebar');
			
			if (!window.api.childOrParentHasClass(event.target, 'sidebar') && !window.api.childOrParentHasClass(event.target, 'open-menu')) {
				window.api.removeClass(sidebar, 'open');
			}
        });
	}

}).call(window.api = window.api || {});

document.addEventListener('DOMContentLoaded', function() {
  	window.api.init();
});