// public static String display_phoneme(Phoneme phoneme, String language, String additional_class)
function generate_phoneme_display(phoneme, language, additional_class)
{
    var example = phoneme[language];

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

    display_phonemes_with_selected_language(select.value);
}

function display_phonemes_with_selected_language(lang)
{
    var selected_phonemes = vowels;
    document.getElementById('vowel_panel').innerHTML = "";

    selected_phonemes =  filter_phoneme_array_for_lang(vowels, lang);
    display_phonemes(selected_phonemes, lang);
}

function display_phonemes(phoneme_array, lang)
{
    var panel = document.getElementById('vowel_panel');
    var i = 0;

    for(let p of phoneme_array)
    {
        var css_class = i < 8 ? 'pos_1_' + (i++ + 1) : '';
        panel.innerHTML += generate_phoneme_display(p, lang, css_class);
    }
}