var vowels = [
    {
        'name' : 'close_front_unrounded_vowel',
        'symbol' : 'i',
        'french' : 'v<strong>i</strong>e',
        'english' : 'b<strong>ee</strong>t',
        'czech' : 't<strong>y</strong>',
        'taiwanese' : '<strong>i</strong> 衣',
        'sound' : '',
		'all' : ''     
    },
    {
        'name' : 'close_front_unrounded_vowel-nasal',
        'symbol' : 'ĩ',
        // not in French
        // not in American English
        // not in Czech
        'taiwanese' : '<strong>iⁿ</strong> 圓',
        'sound' : '',
		'all' : ''     
    },
    {
        'name' : 'close_front_rounded_vowel',
        'symbol' : 'y',
        'french' : 'ch<strong>u</strong>te',
        'english' : 'f<strong>ew</strong>',
        // not in Taiwanese
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close_central_unrounded_vowel',
        'symbol' : 'ɨ',
        // not in French
        // not in American English
        // not in Taiwanese
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close_central_rounded_vowel',
        'symbol' : 'ʉ',
        // not in French
        'english' : 'ch<strong>oo</strong>se',
        // not in Taiwanese
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close_back_unrounded_vowel',
        'symbol' : 'ɯ',
        // not in French
        // not in American English
        // not in Taiwanese
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close_back_rounded_vowel',
        'symbol' : 'u',
        'french' : 'f<strong>ou</strong>',
        'english' : 'b<strong>oo</strong>t',
        'czech' : 'm<strong>u</strong>ž',
        'taiwanese' : '<strong>u</strong> 污',
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close_back_rounded_vowel-nasal',
        'symbol' : 'ũ',
        // not in French
        // not in American English
        // not in Czech
        'taiwanese' : 'ki<strong>uⁿ</strong> 薑</span>',
        'sound' : '',
		'all' : ''     
    },
    {
        'name' : 'near-close_near-front_unrounded_vowel',
        'symbol' : 'ɪ',
        // not in French
        'english' : 'b<strong>i</strong>t',
        // not in Taiwanese
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'near-close_near-front_rounded_vowel',
        'symbol' : 'Y',
        // not in French
        // not in American English
        // not in Taiwanese
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'near-close_near-back_rounded_vowel',
        'symbol' : 'ʊ',
        // not in French
        'english' : 'h<strong>oo</strong>k',
        // not in Taiwanese
        'sound' : '',
		'all' : ''
    },
    {
        'name' : 'close-mid_front_unrounded_vowel',
        'symbol' : 'e',
        'french' : 'beaut<strong>é</strong>',
        'english' : 'pl<strong>ay</strong>',
        'czech' : 'kd<strong>e</strong>',
        'taiwanese': 'l<strong>e</strong> 禮',
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
   // French only
   {
        'name' : 'nasal_open_back_unrounded_vowel',
        'symbol' : 'ɑ̃',
        'french' : 'p<strong>an</strong>da',
        'sound' : ''
    },
    {
        'name' : 'nasal_open-mid_back_rounded_vowel',
        'symbol' : 'ɔ̃',
        'french' : 'b<strong>on</strong>',
        'sound' : ''
    },
    {
        'name' : 'nasal_open-mid_front_unrounded_vowel',
        'symbol' : 'ɛ̃',
        'french' : 'v<strong>in</strong>',
        'sound' : ''
    },
    {
        'name' : 'nasal_open-mid_front_rounded_vowel',
        'symbol' : 'œ̃',
        'french' : 'br<strong>un</strong>',
        'sound' : '',
    },
];