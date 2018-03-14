var vowels = [
    {
        'name' : 'close_front_unrounded_vowel',
        'symbol' : 'i',
        'french' : 'v<strong>i</strong>e',
        'english' : 'b<strong>ee</strong>t',
        'czech' : 't<strong>y</strong>',
        'sound' : '',
		'all' : ''     
    },
    {
        'name' : 'close_front_rounded_vowel',
        'symbol' : 'y',
        'french' : 'ch<strong>u</strong>te',
        'english' : 'f<strong>ew</strong>',
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close_central_unrounded_vowel',
        'symbol' : 'ɨ',
        // not in French
        // not in American English
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close_central_rounded_vowel',
        'symbol' : 'ʉ',
        // not in French
        'english' : 'ch<strong>oo</strong>se',
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close_back_unrounded_vowel',
        'symbol' : 'ɯ',
        // not in French
        // not in American English
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close_back_rounded_vowel',
        'symbol' : 'u',
        'french' : 'f<strong>ou</strong>',
        'english' : 'b<strong>oo</strong>t',
        'czech' : 'm<strong>u</strong>ž',
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'near-close_near-front_unrounded_vowel',
        'symbol' : 'ɪ',
        // not in French
        'english' : 'b<strong>i</strong>t',
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'near-close_near-front_rounded_vowel',
        'symbol' : 'Y',
        // not in French
        // not in American English
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'near-close_near-back_rounded_vowel',
        'symbol' : 'ʊ',
        // not in French
        'english' : 'h<strong>oo</strong>k',
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close-mid_front_unrounded_vowel',
        'symbol' : 'e',
        'french' : 'beaut<strong>é</strong>',
        'english' : 'pl<strong>ay</strong>',
        'czech' : 'kd<strong>e</strong>',
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close-mid_front_rounded_vowel',
        'symbol' : 'ø',
        'french' : 'p<strong>eu</strong>',
        // not in American English
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close-mid_central_unrounded_vowel',
        'symbol' : 'ɘ',
        // not in French
        // not in American English
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close-mid_central_rounded_vowel',
        'symbol' : 'ɵ',
        // not in French
        // not in American English
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close-mid_back_unrounded_vowel',
        'symbol' : 'ɤ',
        // not in French
        // not in American English
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close-mid_back_rounded_vowel',
        'symbol' : 'o',
        'french' : 'rés<strong>eau</strong>',
        'czech' : 'piv<strong>o</strong>',
        // not in American English ; albeit /ow/ exists
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'mid_central_vowel',
        'symbol' : 'ə',
        'french' : 'qu<strong>e</strong>',
        // not in American English
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'open-mid_front_unrounded_vowel',
        'symbol' : 'ɛ',
        'french' : 'c<strong>è</strong>pe',
        'english' : 'b<strong>e</strong>d',
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'open-mid_front_rounded_vowel',
        'symbol' : 'œ',
        'french' : 'j<strong>eu</strong>ne',
        // not in American English
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'open-mid_central_unrounded_vowel',
        'symbol' : 'ɜ',
        // not in French
        // not in American English
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'open-mid_central_rounded_vowel',
        'symbol' : 'ɞ',
        // not in French
        // not in American English
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'open-mid_back_unrounded_vowel',
        'symbol' : 'ʌ',
        // not in French
        'english' : 'g<strong>u</strong>t',
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'open-mid_back_rounded_vowel',
        'symbol' : 'ɔ',
        'french' : 's<strong>o</strong>rt',
        'english' : 'th<strong>ough</strong>t',
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'near-open_front_unrounded_vowel',
        'symbol' : 'æ',
        // not in French
        'english' : 'c<strong>a</strong>t',
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'near-open_central_vowel',
        'symbol' : 'ɐ',
        // not in French
        // not in American English
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'open_front_unrounded_vowel',
        'symbol' : 'a',
        'french' : 'l<strong>a</strong>',
        'english' : 'h<strong>a</strong>t',
        'czech' : '<strong>a</strong>no',
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'open_front_rounded_vowel',
        'symbol' : 'ɶ',
        // not in French
        // not in American English
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'open_back_unrounded_vowel',
        'symbol' : 'ɑ',
        'french' : 'p<strong>â</strong>te',
        'english' : 'f<strong>a</strong>ther',
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'open_back_rounded_vowel',
        'symbol' : 'ɒ',
        // not in French
        // not in American English; British English: 'english' : 'l<strong>o</strong>t',
        'sound' : '',
		'all' : ''
    },
    /*
    {
        'name' : '',
        'symbol' : '',
        'french' : '<strong></strong>',
        'english' : '<strong></strong>',
        'sound' : '',
		'all' : ''
    },
    */
];