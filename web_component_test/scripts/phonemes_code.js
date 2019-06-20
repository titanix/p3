'use strict';

// public static String display_phoneme(Phoneme phoneme, String language, String additional_class)
function generate_phoneme_display(phoneme, language, additional_class)
{
    var example = phoneme[language];

    /*
    return String.format(
        `<div class="phoneme_grid {2}">
            <div class="phoneme_sound">
                <img class="speaker" src="speaker.svg">
            </div>
            <div class="phoneme_symbol">{0}</div>
            <div class="phoneme_example">{1}</div>
        </div>`,
        phoneme.symbol,
        example,
        additional_class
    );
    */
   return String.format(
    `<body>
        <phoneme-view
            class="phoneme_grid {0}"
            symbol="{1}" 
            example="{2}"
            sound="sounds/{3}.ogg"></phoneme-view>
    </body>`,
    additional_class,
    phoneme.symbol,
    example,
    phoneme.name
    );
}

// Phoneme[] filter_phoneme_array_for_lang(Phoneme[] ph_list, String language)
function filter_phoneme_array_for_lang(phoneme_array, language)
{
    var result = Array();
    for(let p of phoneme_array)
    {
        if(p.hasOwnProperty(language))
        {
            result.push(p);
        }
    }
    return result;
}

function selection_changed_handler()
{
    var select = document.getElementById('preset_language');

    display_phonemes_with_selected_language(select.value, vowels, 'vowel_panel');
    display_phonemes_with_selected_language(select.value, consonants, 'consonant_panel');
}

function display_phonemes_with_selected_language(lang, soundClass, targetDiv)
{
    var selected_phonemes = soundClass;
    document.getElementById(targetDiv).innerHTML = "";

    selected_phonemes =  filter_phoneme_array_for_lang(soundClass, lang);
    display_phonemes(selected_phonemes, lang, targetDiv);
}

function display_phonemes(phoneme_array, lang, targetDiv)
{
    var panel = document.getElementById(targetDiv);
    var i = 0;

    for(let p of phoneme_array)
    {
        var css_class = i < 8 ? 'pos_1_' + (i++ + 1) : '';
        panel.innerHTML += generate_phoneme_display(p, lang, css_class);
    }
}