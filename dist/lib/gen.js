'use strict';

import _regeneratorRuntime from 'babel-runtime/regenerator';
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _ownKeys = require('babel-runtime/core-js/reflect/own-keys');

var _ownKeys2 = _interopRequireDefault(_ownKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [gen].map(_regeneratorRuntime.mark);

function gen(obj) {
  var propKeys, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, propKey;

  return regeneratorRuntime.wrap(function gen$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        propKeys = (0, _ownKeys2.default)(obj);
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        _context.prev = 4;
        _iterator = (0, _getIterator3.default)(propKeys);

      case 6:
        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
          _context.next = 13;
          break;
        }

        propKey = _step.value;
        _context.next = 10;
        return [propKey, obj[propKey]];

      case 10:
        _iteratorNormalCompletion = true;
        _context.next = 6;
        break;

      case 13:
        _context.next = 19;
        break;

      case 15:
        _context.prev = 15;
        _context.t0 = _context['catch'](4);
        _didIteratorError = true;
        _iteratorError = _context.t0;

      case 19:
        _context.prev = 19;
        _context.prev = 20;

        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }

      case 22:
        _context.prev = 22;

        if (!_didIteratorError) {
          _context.next = 25;
          break;
        }

        throw _iteratorError;

      case 25:
        return _context.finish(22);

      case 26:
        return _context.finish(19);

      case 27:
      case 'end':
        return _context.stop();
    }
  }, _marked[0], this, [[4, 15, 19, 27], [20,, 22, 26]]);
}

exports.default = gen;