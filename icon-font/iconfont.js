;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xiayishou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M631.200768 493.799424c-0.039936-0.04096-0.075776-0.083968-0.115712-0.123904-1.426432-1.439744-2.973696-2.675712-4.608-3.72224L375.805952 285.83424c-4.942848-6.662144-12.848128-11.010048-21.740544-11.058176-0.637952-0.003072-1.26976 0.022528-1.898496 0.06144-6.401024 0.252928-12.729344 2.840576-17.6128 7.774208-0.423936 0.429056-0.82432 0.872448-1.21344 1.323008-3.830784 4.3264-6.23616 9.899008-6.465536 16.09728-0.037888 0.728064-0.043008 1.458176-0.022528 2.187264l0.224256 422.310912c0.079872 14.876672 12.63104 27.001856 27.505664 27.080704 9.152512 0.049152 17.21344-4.475904 22.04672-11.429888L625.718272 536.369152c2.134016-1.184768 4.14208-2.683904 5.950464-4.509696 10.292224-10.411008 10.292224-27.27936 0-37.679104L631.200768 493.799424zM381.35296 666.996736l-0.164864-308.722688 189.197312 154.051584L381.35296 666.996736zM511.02208 4.277248c-281.655296 0-509.999104 228.330496-509.999104 509.997056 0 281.654272 228.343808 509.99808 509.999104 509.99808 281.667584 0 509.996032-228.343808 509.996032-509.99808C1021.018112 232.607744 792.690688 4.277248 511.02208 4.277248zM510.742528 968.51968c-251.493376 0-455.359488-203.879424-455.359488-455.3728 0-251.47904 203.866112-455.359488 455.359488-455.359488 251.4944 0 455.360512 203.880448 455.360512 455.359488C966.102016 764.640256 762.236928 968.51968 510.742528 968.51968zM666.862592 301.975552c-14.8736-0.078848-27.291648 11.501568-27.211776 26.376192l0.226304 368.978944c0.077824 14.874624 12.630016 27.001856 27.503616 27.07968 14.875648 0.079872 26.882048-11.912192 26.802176-26.801152l-0.226304-368.553984C693.876736 314.181632 681.750528 302.055424 666.862592 301.975552z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fenxiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M797.056 605.065216c-63.043584 0-117.6576 36.854784-143.392768 90.159104l-268.06784-53.023744c-1.764352-15.105024-5.615616-29.572096-11.316224-43.086848l178.244608-193.398784c19.853312 8.921088 41.82016 13.92128 64.95744 13.92128 87.73632 0 159.11424-71.385088 159.11424-159.127552 0-87.729152-71.37792-159.099904-159.11424-159.099904-87.743488 0-159.11424 71.370752-159.11424 159.099904 0 33.241088 10.259456 64.123904 27.751424 89.675776L319.490048 530.983936c-25.972736-18.445312-57.673728-29.333504-91.882496-29.333504-87.73632 0-159.121408 71.370752-159.121408 159.11424 0 87.729152 71.385088 159.11424 159.121408 159.11424 63.85664 0 119.003136-37.827584 144.31744-92.23168l266.835968 52.77184c8.165376 80.131072 76.054528 142.86848 158.294016 142.86848 87.737344 0 159.107072-71.385088 159.107072-159.121408S884.79232 605.065216 797.056 605.065216zM617.480192 187.875328c40.047616 0 72.644608 32.58368 72.644608 72.631296 0 40.054784-32.596992 72.645632-72.644608 72.645632-40.054784 0-72.645632-32.590848-72.645632-72.645632C544.83456 220.459008 577.425408 187.875328 617.480192 187.875328zM227.607552 733.394944c-40.054784 0-72.659968-32.589824-72.659968-72.631296 0-40.061952 32.60416-72.644608 72.659968-72.644608 40.047616 0 72.638464 32.582656 72.638464 72.644608C300.246016 700.80512 267.656192 733.394944 227.607552 733.394944zM797.056 836.816896c-40.047616 0-72.651776-32.596992-72.651776-72.651776s32.60416-72.644608 72.651776-72.644608c40.054784 0 72.639488 32.589824 72.639488 72.644608S837.110784 836.816896 797.056 836.816896z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ordinarydownload" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M514.752 740.416 270.784 401.344 404.48 401.344 404.48 124.672l220.864 0 0 276.672 133.696 0-243.968 339.072L514.752 740.416z"  ></path>' +
    '' +
    '<path d="M902.912 650.944l-84.8 0 0 162.112L206.528 813.056l0-162.112L121.088 650.944l0 248.384 781.888 0L902.976 650.944z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-aixinon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 960c0 0-219.52-169.024-286.528-241.984C91.264 572.16 17.344 406.336 96.512 219.584 175.616 32.384 399.936 6.976 512 182.4c112-175.36 336.384-150.016 415.488 37.184 79.104 186.752 5.248 352.64-129.024 498.432C731.392 790.976 512 960 512 960z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuanxiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M283.529495 195.631586l673.725358 0 0 102.523001-673.725358 0 0-102.523001Z"  ></path>' +
    '' +
    '<path d="M109.972671 195.631586l10.252505 0c25.484418 0 46.13576 20.651342 46.13576 46.13576l0 10.252505c0 25.484418-20.651342 46.13576-46.13576 46.13576l-10.252505 0c-25.484418 0-46.13576-20.651342-46.13576-46.13576l0-10.252505C63.836911 216.282928 84.488253 195.631586 109.972671 195.631586z"  ></path>' +
    '' +
    '<path d="M283.529495 459.262892l673.725358 0 0 102.523001-673.725358 0 0-102.523001Z"  ></path>' +
    '' +
    '<path d="M109.972671 459.262892l10.252505 0c25.484418 0 46.13576 20.651342 46.13576 46.13576l0 10.252505c0 25.484418-20.651342 46.13576-46.13576 46.13576l-10.252505 0c-25.484418 0-46.13576-20.651342-46.13576-46.13576l0-10.252505C63.836911 479.914234 84.488253 459.262892 109.972671 459.262892z"  ></path>' +
    '' +
    '<path d="M283.529495 722.895221l673.725358 0 0 102.523001-673.725358 0 0-102.523001Z"  ></path>' +
    '' +
    '<path d="M109.972671 722.895221l10.252505 0c25.484418 0 46.13576 20.651342 46.13576 46.13576l0 10.252505c0 25.484418-20.651342 46.13576-46.13576 46.13576l-10.252505 0c-25.484418 0-46.13576-20.651342-46.13576-46.13576l0-10.252505C63.836911 743.546563 84.488253 722.895221 109.972671 722.895221z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinleliebiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M684.950004 337.171206l0 447.459055c0 3.137457-1.027399 6.02011-2.727111 8.388041-3.409656 62.715367-60.523445 123.82312-142.259004 145.715733-96.286973 25.789363-190.235692-12.602016-209.843262-85.755106-19.60757-73.151044 42.551118-153.357783 138.837068-179.149193 59.22487-15.863293 117.535927-7.414877 158.235884 18.439978L627.193579 322.736449c0 0-2.706645-70.815859 115.513874-28.867468 118.222565 41.948391 216.588897 43.302225 216.588897 43.302225l0 57.736982C959.296349 394.907165 818.513976 390.397455 684.950004 337.171206zM623.013373 774.527159c-11.351536-42.35055-81.335447-60.402695-139.107221-44.929282-57.771775 15.473413-109.349477 66.086138-97.997941 108.437711 11.351536 42.35055 81.335447 60.401672 139.107221 44.927235C582.787206 867.48941 634.364909 816.876686 623.013373 774.527159zM540.559453 423.776679 78.501912 423.776679c-7.974625 0-14.43885-6.463202-14.43885-14.434757l0-28.867468c0-7.971555 6.464225-14.434757 14.43885-14.434757l462.057541 0c7.974625 0 14.437827 6.463202 14.437827 14.434757l0 28.867468C554.998303 417.313477 548.534078 423.776679 540.559453 423.776679zM540.559453 279.43627 78.501912 279.43627c-7.974625 0-14.43885-6.463202-14.43885-14.434757l0-28.869514c0-7.971555 6.464225-14.434757 14.43885-14.434757l462.057541 0c7.974625 0 14.437827 6.463202 14.437827 14.434757l0 28.869514C554.998303 272.973068 548.534078 279.43627 540.559453 279.43627zM540.559453 135.093814 78.501912 135.093814c-7.974625 0-14.43885-6.463202-14.43885-14.434757l0-28.867468c0-7.972579 6.464225-14.434757 14.43885-14.434757l462.057541 0c7.974625 0 14.437827 6.462179 14.437827 14.434757l0 28.867468C554.998303 128.630612 548.534078 135.093814 540.559453 135.093814zM78.501912 510.380106l360.982518 0c7.974625 0 14.437827 6.462179 14.437827 14.434757l0 28.868491c0 7.971555-6.464225 14.434757-14.437827 14.434757L78.501912 568.118112c-7.974625 0-14.43885-6.463202-14.43885-14.434757l0-28.868491C64.063061 516.843308 70.527286 510.380106 78.501912 510.380106zM78.501912 640.287805l202.150046 0c7.974625 0 14.43885 6.463202 14.43885 14.434757l0 28.868491c0 7.971555-6.464225 14.432711-14.43885 14.432711L78.501912 698.023764c-7.974625 0-14.43885-6.461155-14.43885-14.432711l0-28.868491C64.063061 646.751007 70.527286 640.287805 78.501912 640.287805z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pause" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.986 988.444c-274.475 0-497.778-223.303-497.778-497.778s223.303-497.778 497.778-497.778c274.489 0 497.806 223.303 497.806 497.778s-223.317 497.778-497.806 497.778zM511.986 21.333c-258.788 0-469.333 210.546-469.333 469.333 0 258.802 210.546 469.333 469.333 469.333 258.802 0 469.362-210.56 469.362-469.333 0-258.802-210.56-469.333-469.362-469.333z"  ></path>' +
    '' +
    '<path d="M404.907 292.295v0z"  ></path>' +
    '' +
    '<path d="M369.351 292.295h71.111v396.715h-71.111v-396.715z"  ></path>' +
    '' +
    '<path d="M619.093 292.295v0z"  ></path>' +
    '' +
    '<path d="M583.538 292.295h71.111v396.715h-71.111v-396.715z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofangzanting02" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.376 0 0 229.376 0 512 0 794.624 229.376 1024 512 1024 794.624 1024 1024 794.624 1024 512 1024 229.376 794.624 0 512 0L512 0 512 0zM512 991.232C245.76 991.232 32.768 778.24 32.768 512 32.768 245.76 245.76 32.768 512 32.768S991.232 245.76 991.232 512C991.232 778.24 778.24 991.232 512 991.232L512 991.232 512 991.232zM733.184 503.808 393.216 307.2c-4.096-4.096-8.192-4.096-12.288 0C376.832 307.2 372.736 311.296 372.736 315.392l0 393.216c0 4.096 4.096 8.192 4.096 8.192 4.096 4.096 8.192 4.096 12.288 0l344.064-196.608c4.096-4.096 4.096-4.096 4.096-8.192C741.376 507.904 737.28 503.808 733.184 503.808L733.184 503.808 733.184 503.808zM733.184 503.808"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-danquxunhuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M997.970784 537.255904C997.970784 716.297771 871.695112 895.339639 639.887048 895.339639 534.175614 895.339639 318.66036 895.339639 217.859789 895.339639 213.486052 895.339639 208.984428 895.339639 205.071084 895.339639L182.818737 895.339639 245.176462 957.671787C260.215979 972.736881 260.215979 997.112152 245.176462 1012.151669 230.111368 1027.191186 205.736097 1027.191186 190.69658 1012.151669L63.602431 885.05752C63.346657 884.827324 63.295502 884.494817 63.039728 884.239043 56.00594 877.281988 51.606626 867.639304 51.606626 856.973525 51.606626 846.282167 56.00594 836.665061 63.039728 829.708006 63.295502 829.452232 63.346657 829.119726 63.602431 828.863951L190.69658 701.769803C205.736097 686.730286 230.111368 686.730286 245.176462 701.769803 260.215979 716.80932 260.215979 741.210168 245.176462 756.249685L182.818737 818.60741 205.071084 818.60741C208.779808 818.60741 213.153545 818.60741 217.859789 818.60741 277.941124 818.60741 416.775304 818.60741 588.732229 818.60741 817.317539 818.60741 921.238555 687.523186 921.238555 460.523675L923.821873 460.523675C922.363961 456.482444 921.238555 452.262171 921.238555 447.73497L921.238555 396.580151C921.238555 375.376478 938.426574 358.214036 959.604669 358.214036 980.782765 358.214036 997.970784 375.376478 997.970784 396.580151L997.970784 447.73497C997.970784 452.262171 996.845378 456.482444 995.387465 460.523675L997.970784 460.523675 997.970784 537.255904ZM489.005909 358.214036C494.300433 343.379138 508.137811 332.636626 524.788705 332.636626 545.9668 332.636626 563.154819 349.799068 563.154819 371.002741L563.154819 677.931657C563.154819 699.109752 545.9668 716.297771 524.788705 716.297771 503.61061 716.297771 486.42259 699.109752 486.42259 677.931657L486.42259 434.946265 473.633885 434.946265C452.45579 434.946265 435.267771 417.758246 435.267771 396.580151 435.267771 375.376478 452.45579 358.214036 473.633885 358.214036L489.005909 358.214036ZM960.397569 194.467459 833.30342 321.561608C818.263903 336.601125 793.888632 336.601125 778.849115 321.561608 763.784021 306.522091 763.784021 282.14682 778.849115 267.107303L841.181263 204.749578 818.928916 204.749578C815.220192 204.749578 810.846455 204.749578 806.140211 204.749578 746.058876 204.749578 607.224696 204.749578 435.267771 204.749578 206.682461 204.749578 102.761445 335.833803 102.761445 562.833313L100.178127 562.833313C101.636039 566.874544 102.761445 571.069239 102.761445 575.622018L102.761445 626.776838C102.761445 647.954933 85.573426 665.142952 64.395331 665.142952 43.217235 665.142952 26.029216 647.954933 26.029216 626.776838L26.029216 575.622018C26.029216 571.069239 27.154622 566.874544 28.612535 562.833313L26.029216 562.833313 26.029216 486.101084C26.029216 307.059217 152.330465 128.017349 384.112952 128.017349 489.824386 128.017349 705.33964 128.017349 806.140211 128.017349 810.513948 128.017349 815.015572 128.017349 818.928916 128.017349L841.181263 128.017349 778.849115 65.659624C763.784021 50.620107 763.784021 26.219258 778.849115 11.179742 793.888632-3.859775 818.263903-3.859775 833.30342 11.179742L960.397569 138.299468C960.653343 138.529664 960.704498 138.862171 960.960272 139.117945 967.99406 146.075 972.393374 155.692106 972.393374 166.383463 972.393374 177.049243 967.99406 186.691927 960.960272 193.648982 960.730075 193.904756 960.653343 194.237263 960.397569 194.467459Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)