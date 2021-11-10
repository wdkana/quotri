// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.9;

/**
 * @title Quotri
 * @dev Quotri: kutipan ethereum
 */

contract Quotri {
    uint256 public count = 0;

    struct Quotes {
        uint256 id;
        string content;
        bool published;
    }

    mapping(uint256 => Quotes) public quotes;

    constructor() {
        createQuote(
            "Selamat datang di Quotri: hasil    kan ethereum hanya dengan kutipan"
        );
    }

    event QuoteCreated(uint256 id, string content, bool published);
    event QuotePublished(uint256 id, bool published);

    function createQuote(string memory _content) public {
        count++;
        quotes[count] = Quotes(count, _content, false);
        emit QuoteCreated(count, _content, false);
    }

    function publishQuote(uint256 _id) public {
        Quotes memory _quotes = quotes[_id];
        _quotes.published = !_quotes.published;
        quotes[_id] = _quotes;
        emit QuotePublished(_id, _quotes.published);
    }
}
