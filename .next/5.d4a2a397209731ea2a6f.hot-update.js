webpackHotUpdate(5, {
  /***/ /***/ 420: function(module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true,
    })

    var _theme = __webpack_require__(399)

    var _theme2 = _interopRequireDefault(_theme)

    var _util = __webpack_require__(402)

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      } else {
        obj[key] = value
      }
      return obj
    }

    var responsiveStyles = function responsiveStyles() {
      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      return function(props) {
        // support for legacy API
        var arg = args[0],
          _prop = args[1],
          _bool = args[2]

        var _ref =
            typeof arg === 'string'
              ? { cssProperty: arg, prop: _prop, boolValue: _bool }
              : arg,
          cssProperty = _ref.cssProperty,
          prop = _ref.prop,
          boolValue = _ref.boolValue,
          key = _ref.key,
          numberToPx = _ref.numberToPx

        prop = prop || cssProperty
        var n = props[prop]
        console.log('test', prop)
        if (!(0, _util.is)(n)) return null
        var mediaQueries = (0, _util.breaks)()
        props.theme = _theme2.default
        var scale = (0, _util.get)(props, ['theme', key || prop].join('.'), {})

        var sx = function sx(val) {
          return (0, _util.get)(
            scale,
            '' + val,
            numberToPx ? (0, _util.px)(val) : val,
          )
        }

        if (!Array.isArray(n)) {
          return _defineProperty({}, cssProperty, sx(bool(boolValue)(n)))
        }

        var val = (0, _util.arr)(n)

        return val
          .map(bool(boolValue))
          .map(sx)
          .map((0, _util.dec)(cssProperty))
          .map((0, _util.media)(mediaQueries))
          .reduce(_util.merge, {})
      }
    }

    var bool = function bool(val) {
      return function(n) {
        return n === true ? val : n
      }
    }

    exports.default = responsiveStyles
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZWQvcmVzcG9uc2l2ZVN0eWxlLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiYXJyIiwiYnJlYWtzIiwiZGVjIiwiZ2V0IiwiaXMiLCJtZWRpYSIsIm1lcmdlIiwicHgiLCJyZXNwb25zaXZlU3R5bGVzIiwiYXJncyIsImFyZyIsIl9wcm9wIiwiX2Jvb2wiLCJjc3NQcm9wZXJ0eSIsInByb3AiLCJib29sVmFsdWUiLCJrZXkiLCJudW1iZXJUb1B4IiwibiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIm1lZGlhUXVlcmllcyIsInNjYWxlIiwiam9pbiIsInN4IiwidmFsIiwiQXJyYXkiLCJpc0FycmF5IiwiYm9vbCIsIm1hcCIsInJlZHVjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7O0FBRUEsQUFBUyxBQUFULEFBQWMsQUFBZCxBQUFzQixBQUF0QixBQUEyQixBQUEzQixBQUFnQyxBQUFoQyxBQUFvQyxBQUFwQyxBQUEyQyxBQUEzQyxBQUFrRCxBQUFsRDs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxtQkFBbUIsU0FBbkIsQUFBbUIsbUJBQUE7b0NBQUksQUFBSixtREFBSTtBQUFKLDJCQUFBO0FBQUE7O1NBQWEsaUJBQVMsQUFDN0M7QUFENkM7UUFFdEMsQUFGc0MsTUFFakIsQUFGaUIsS0FBQTtRQUVqQyxBQUZpQyxRQUVqQixBQUZpQixLQUFBO1FBRTFCLEFBRjBCLFFBRWpCLEFBRmlCLEtBQUE7O2VBSTNDLE9BQU8sQUFBUCxRQUFlLEFBQWYsV0FDSSxFQUFFLGFBQWEsQUFBZixLQUFvQixNQUFNLEFBQTFCLE9BQWlDLFdBQVcsQUFBNUMsQUFESixVQUVJLEFBTnVDO1FBR3ZDLEFBSHVDLG1CQUd2QyxBQUh1QztRQUcxQixBQUgwQixZQUcxQixBQUgwQjtRQUdwQixBQUhvQixpQkFHcEIsQUFIb0I7UUFHVCxBQUhTLFdBR1QsQUFIUztRQUdKLEFBSEksa0JBR0osQUFISSxBQU83Qzs7V0FBTyxRQUFRLEFBQWYsQUFDQTtRQUFNLElBQUksTUFBTSxBQUFOLEFBQVYsQUFDQTtZQUFRLEFBQVIsSUFBWSxBQUFaLFFBQW9CLEFBQXBCLEFBQ0E7UUFBSSxDQUFDLGNBQUcsQUFBSCxBQUFMLElBQVksT0FBTyxBQUFQLEFBQ1o7UUFBTSxlQUFlLEFBQXJCLEFBQ0E7VUFBTSxBQUFOLEFBQWMsQUFBZCxBQUNBO1FBQU0sUUFBUSxlQUFJLEFBQUosT0FBVyxDQUFDLEFBQUQsU0FBVSxPQUFPLEFBQWpCLE1BQXVCLEFBQXZCLEtBQTRCLEFBQTVCLEFBQVgsTUFBNkMsQUFBN0MsQUFBZCxBQUVBOztRQUFNLEtBQUssU0FBTCxBQUFLLFFBQUE7YUFBTyxlQUFJLEFBQUosT0FBVyxLQUFLLEFBQWhCLEtBQXFCLGFBQWEsY0FBRyxBQUFILEFBQWIsT0FBdUIsQUFBNUMsQUFBUDtBQUFYLEFBRUE7O1FBQUksQ0FBQyxNQUFNLEFBQU4sUUFBYyxBQUFkLEFBQUwsSUFBdUIsQUFDckI7aUNBQ0csQUFESCxhQUNpQixHQUFHLEtBQUssQUFBTCxXQUFnQixBQUFoQixBQUFILEFBRGpCLEFBR0Q7QUFFRDs7UUFBTSxNQUFNLGVBQUksQUFBSixBQUFaLEFBRUE7O1dBQU8sSUFDSixBQURJLElBQ0EsS0FBSyxBQUFMLEFBREEsWUFFSixBQUZJLElBRUEsQUFGQSxJQUdKLEFBSEksSUFHQSxlQUFJLEFBQUosQUFIQSxjQUlKLEFBSkksSUFJQSxpQkFBTSxBQUFOLEFBSkEsZUFLSixBQUxJLEFBS0csQUFMSCxvQkFLVSxBQUxWLEFBQVAsQUFNRDtBQS9Cd0I7QUFBekI7O0FBaUNBLElBQU0sT0FBTyxTQUFQLEFBQU8sVUFBQTtTQUFPLGFBQUE7V0FBTSxNQUFNLEFBQU4sT0FBYSxBQUFiLE1BQW1CLEFBQXpCO0FBQVA7QUFBYixBQUVBOztrQkFBZSxBQUFmIiwiZmlsZSI6InJlc3BvbnNpdmVTdHlsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yeWFuL2Rldi9hcHAifQ==

    ;(function register() {
      /* react-hot-loader/webpack */ if (true) {
        if (typeof __REACT_HOT_LOADER__ === 'undefined') {
          return
        }
        /* eslint-disable camelcase, no-undef */ var webpackExports =
          typeof __webpack_exports__ !== 'undefined'
            ? __webpack_exports__
            : module.exports
        /* eslint-enable camelcase, no-undef */ if (
          typeof webpackExports === 'function'
        ) {
          __REACT_HOT_LOADER__.register(
            webpackExports,
            'module.exports',
            '/home/ryan/dev/app/src/styled/responsiveStyle.js',
          )
          return
        }
        /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) {
          /* eslint-enable no-restricted-syntax */ if (
            !Object.prototype.hasOwnProperty.call(webpackExports, key)
          ) {
            continue
          }
          var namedExport = void 0
          try {
            namedExport = webpackExports[key]
          } catch (err) {
            continue
          }
          __REACT_HOT_LOADER__.register(
            namedExport,
            key,
            '/home/ryan/dev/app/src/styled/responsiveStyle.js',
          )
        }
      }
    })()

    /***/
  },
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kNGEyYTM5NzIwOTczMWVhMmE2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlZC9yZXNwb25zaXZlU3R5bGUuanM/ZDQ1MDkxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSAndGhlbWUnXG5cbmltcG9ydCB7IGFyciwgYnJlYWtzLCBkZWMsIGdldCwgaXMsIG1lZGlhLCBtZXJnZSwgcHggfSBmcm9tICcuL3V0aWwnXG5cbmNvbnN0IHJlc3BvbnNpdmVTdHlsZXMgPSAoLi4uYXJncykgPT4gcHJvcHMgPT4ge1xuICAvLyBzdXBwb3J0IGZvciBsZWdhY3kgQVBJXG4gIGNvbnN0IFthcmcsIF9wcm9wLCBfYm9vbF0gPSBhcmdzXG4gIGxldCB7IGNzc1Byb3BlcnR5LCBwcm9wLCBib29sVmFsdWUsIGtleSwgbnVtYmVyVG9QeCB9ID1cbiAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJ1xuICAgICAgPyB7IGNzc1Byb3BlcnR5OiBhcmcsIHByb3A6IF9wcm9wLCBib29sVmFsdWU6IF9ib29sIH1cbiAgICAgIDogYXJnXG4gIHByb3AgPSBwcm9wIHx8IGNzc1Byb3BlcnR5XG4gIGNvbnN0IG4gPSBwcm9wc1twcm9wXVxuICBjb25zb2xlLmxvZygndGVzdCcsIHByb3ApXG4gIGlmICghaXMobikpIHJldHVybiBudWxsXG4gIGNvbnN0IG1lZGlhUXVlcmllcyA9IGJyZWFrcygpXG4gIHByb3BzLnRoZW1lID0gdGhlbWVcbiAgY29uc3Qgc2NhbGUgPSBnZXQocHJvcHMsIFsndGhlbWUnLCBrZXkgfHwgcHJvcF0uam9pbignLicpLCB7fSlcblxuICBjb25zdCBzeCA9IHZhbCA9PiBnZXQoc2NhbGUsICcnICsgdmFsLCBudW1iZXJUb1B4ID8gcHgodmFsKSA6IHZhbClcblxuICBpZiAoIUFycmF5LmlzQXJyYXkobikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW2Nzc1Byb3BlcnR5XTogc3goYm9vbChib29sVmFsdWUpKG4pKSxcbiAgICB9XG4gIH1cblxuICBjb25zdCB2YWwgPSBhcnIobilcblxuICByZXR1cm4gdmFsXG4gICAgLm1hcChib29sKGJvb2xWYWx1ZSkpXG4gICAgLm1hcChzeClcbiAgICAubWFwKGRlYyhjc3NQcm9wZXJ0eSkpXG4gICAgLm1hcChtZWRpYShtZWRpYVF1ZXJpZXMpKVxuICAgIC5yZWR1Y2UobWVyZ2UsIHt9KVxufVxuXG5jb25zdCBib29sID0gdmFsID0+IG4gPT4gKG4gPT09IHRydWUgPyB2YWwgOiBuKVxuXG5leHBvcnQgZGVmYXVsdCByZXNwb25zaXZlU3R5bGVzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3R5bGVkL3Jlc3BvbnNpdmVTdHlsZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQXpCQTtBQUFBO0FBQ0E7QUFnQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
