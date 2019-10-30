/**
 * @license
 * Copyright 2012 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview English strings.
 * @author fraser@google.com (Neil Fraser)
 *
 * After modifying this file, either run "build.py" from the parent directory,
 * or run (from this directory):
 * ../i18n/js_to_json.py
 * to regenerate json/{en,qqq,synonyms}.json.
 *
 * To convert all of the json files to .js files, run:
 * ../i18n/create_messages.py json/*.json
 */
'use strict';


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a triple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors, adds
 * them to msg/json/qqq.json, and they show up in the translation console.
 */

/** @type {string} */
/// {{Notranslate}} Hue value for all logic blocks.
Blockly.Msg.LOGIC_HUE = '210';
/** @type {string} */
/// {{Notranslate}} Hue value for all loop blocks.
Blockly.Msg.LOOPS_HUE = '120';
/** @type {string} */
/// {{Notranslate}} Hue value for all math blocks.
Blockly.Msg.MATH_HUE = '230';
/** @type {string} */
/// {{Notranslate}} Hue value for all text blocks.
Blockly.Msg.TEXTS_HUE = '160';
/** @type {string} */
/// {{Notranslate}} Hue value for all list blocks.
Blockly.Msg.LISTS_HUE = '260';
/** @type {string} */
/// {{Notranslate}} Hue value for all colour blocks.
Blockly.Msg.COLOUR_HUE = '20';
/** @type {string} */
/// {{Notranslate}} Hue value for all variable blocks.
Blockly.Msg.VARIABLES_HUE = '330';
/** @type {string} */
/// {{Notranslate}} Hue value for all variable dynamic blocks.
Blockly.Msg.VARIABLES_DYNAMIC_HUE = '310';
/** @type {string} */
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.PROCEDURES_HUE = '290';

/** @type {string} */
/// default name - A simple, general default name for a variable, preferably short.
/// For more context, see
/// [[Translating:Blockly#infrequent_message_types]]. {{Identical|Item}}
Blockly.Msg.VARIABLES_DEFAULT_NAME = 'item';
/** @type {string} */
/// default name - A simple, default name for an unnamed function or variable. Preferably indicates that the item is unnamed.
Blockly.Msg.UNNAMED_KEY = 'unnamed';
/** @type {string} */
/// button text - Button that sets a calendar to today's date. {{Identical|Today}}
Blockly.Msg.TODAY = 'Today';

// Context menus.
/** @type {string} */
/// context menu - Make a copy of the selected block (and any blocks it contains). {{Identical|Duplicate}}
Blockly.Msg.DUPLICATE_BLOCK = 'Duplicate';
/** @type {string} */
/// context menu - Add a descriptive comment to the selected block.
Blockly.Msg.ADD_COMMENT = 'Add Comment';
/** @type {string} */
/// context menu - Remove the descriptive comment from the selected block.
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
/** @type {string} */
/// context menu - Make a copy of the selected workspace comment. {{Identical|Duplicate}}
Blockly.Msg.DUPLICATE_COMMENT = 'Duplicate Comment';
/** @type {string} */
/// context menu - Change from 'external' to 'inline' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.EXTERNAL_INPUTS = 'External Inputs';
/** @type {string} */
/// context menu - Change from 'internal' to 'external' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.INLINE_INPUTS = 'Inline Inputs';
/** @type {string} */
/// context menu - Permanently delete the selected block.
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
/** @type {string} */
/// context menu - Permanently delete the %1 selected blocks.  Parameters: * %1 - an integer greater than 1.
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
/** @type {string} */
/// confirmation prompt - Question the user if they really wanted to permanently delete all %1 blocks.  Parameters: * %1 - an integer greater than 1.
Blockly.Msg.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?';
/** @type {string} */
/// context menu - Reposition all the blocks so that they form a neat line.
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
/** @type {string} */
/// context menu - Make the appearance of the selected block smaller by hiding some information about it.
Blockly.Msg.COLLAPSE_BLOCK = 'Collapse Block';
/** @type {string} */
/// context menu - Make the appearance of all blocks smaller by hiding some information about it.  Use the same terminology as in the previous message.
Blockly.Msg.COLLAPSE_ALL = 'Collapse Blocks';
/** @type {string} */
/// context menu - Restore the appearance of the selected block by showing information about it that was hidden (collapsed) earlier.
Blockly.Msg.EXPAND_BLOCK = 'Expand Block';
/** @type {string} */
/// context menu - Restore the appearance of all blocks by showing information about it that was hidden (collapsed) earlier.  Use the same terminology as in the previous message.
Blockly.Msg.EXPAND_ALL = 'Expand Blocks';
/** @type {string} */
/// context menu - Make the selected block have no effect (unless reenabled).
Blockly.Msg.DISABLE_BLOCK = 'Disable Block';
/** @type {string} */
/// context menu - Make the selected block have effect (after having been disabled earlier).
Blockly.Msg.ENABLE_BLOCK = 'Enable Block';
/** @type {string} */
/// context menu - Provide helpful information about the selected block. {{Identical|Help}}
Blockly.Msg.HELP = 'Help';
/** @type {string} */
/// context menu - Undo the previous action. {{Identical|Undo}}
Blockly.Msg.UNDO = 'Undo';
/** @type {string} */
/// context menu - Undo the previous undo action. {{Identical|Redo}}
Blockly.Msg.REDO = 'Redo';

// Variable renaming.
/** @type {string} */
/// prompt - This message is only seen in the Opera browser.  With most browsers, users can edit numeric values in blocks by just clicking and typing.  Opera does not allows this, so we have to open a new window and prompt users with this message to chanage a value.
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
/** @type {string} */
/// dropdown choice - When the user clicks on a variable block, this is one of the dropdown menu choices.  It is used to rename the current variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.RENAME_VARIABLE = 'Rename variable...';
/** @type {string} */
/// prompt - Prompts the user to enter the new name for the selected variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].  Parameters: * %1 - the name of the variable to be renamed.
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';

// Variable creation
/** @type {string} */
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_VARIABLE = 'Create variable...';
/** @type {string} */
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_STRING_VARIABLE = 'Create string variable...';
/** @type {string} */
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_NUMBER_VARIABLE = 'Create number variable...';
/** @type {string} */
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_COLOUR_VARIABLE = 'Create colour variable...';
/** @type {string} */
/// prompt - Prompts the user to enter the type for a variable.
Blockly.Msg.NEW_VARIABLE_TYPE_TITLE = 'New variable type:';
/** @type {string} */
/// prompt - Prompts the user to enter the name for a new variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
/** @type {string} */
/// alert - Tells the user that the name they entered is already in use.
Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named "%1" already exists.';
/** @type {string} */
/// alert - Tells the user that the name they entered is already in use for another type.
Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = 'A variable named "%1" already exists for another type: "%2".';

// Variable deletion.
/** @type {string} */
/// confirm -  Ask the user to confirm their deletion of multiple uses of a variable.
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = 'Delete %1 uses of the "%2" variable?';
/** @type {string} */
/// alert - Tell the user that they can't delete a variable because it's part of the definition of a function.
Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = 'Can\'t delete the variable "%1" because it\'s part of the definition of the function "%2"';
/** @type {string} */
/// dropdown choice - Delete the currently selected variable.
Blockly.Msg.DELETE_VARIABLE = 'Delete the "%1" variable';

// Colour Blocks.
/** @type {string} */
/// {{Optional}} url - Information about colour.
Blockly.Msg.COLOUR_PICKER_HELPURL = 'https://en.wikipedia.org/wiki/Color';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette].
Blockly.Msg.COLOUR_PICKER_TOOLTIP = 'Choose a colour from the palette.';
/** @type {string} */
/// {{Optional}} url - A link that displays a random colour each time you visit it.
Blockly.Msg.COLOUR_RANDOM_HELPURL = 'http://randomcolour.com';
/** @type {string} */
/// block text - Title of block that generates a colour at random.
Blockly.Msg.COLOUR_RANDOM_TITLE = 'random colour';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#generating-a-random-colour https://github.com/google/blockly/wiki/Colour#generating-a-random-colour].
Blockly.Msg.COLOUR_RANDOM_TOOLTIP = 'Choose a colour at random.';
/** @type {string} */
/// {{Optional}} url - A link for colour codes with percentages (0-100%) for each component, instead of the more common 0-255, which may be more difficult for beginners.
Blockly.Msg.COLOUR_RGB_HELPURL = 'https://www.december.com/html/spec/colorpercompact.html';
/** @type {string} */
/// block text - Title of block for [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_TITLE = 'colour with';
/** @type {string} */
/// block input text - The amount of red (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components]. {{Identical|Red}}
Blockly.Msg.COLOUR_RGB_RED = 'red';
/** @type {string} */
/// block input text - The amount of green (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_GREEN = 'green';
/** @type {string} */
/// block input text - The amount of blue (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components]. {{Identical|Blue}}
Blockly.Msg.COLOUR_RGB_BLUE = 'blue';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_TOOLTIP = 'Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.';
/** @type {string} */
/// {{Optional}} url - A useful link that displays blending of two colours.
Blockly.Msg.COLOUR_BLEND_HELPURL = 'https://meyerweb.com/eric/tools/color-blend/#:::rgbp';
/** @type {string} */
/// block text - A verb for blending two shades of paint.
Blockly.Msg.COLOUR_BLEND_TITLE = 'blend';
/** @type {string} */
/// block input text - The first of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
Blockly.Msg.COLOUR_BLEND_COLOUR1 = 'colour 1';
/** @type {string} */
/// block input text - The second of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
Blockly.Msg.COLOUR_BLEND_COLOUR2 = 'colour 2';
/** @type {string} */
/// block input text - The proportion of the [https://github.com/google/blockly/wiki/Colour#blending-colours blend] containing the first colour; the remaining proportion is of the second colour.  For example, if the first colour is red and the second colour blue, a ratio of 1 would yield pure red, a ratio of .5 would yield purple (equal amounts of red and blue), and a ratio of 0 would yield pure blue. {{Identical|Ratio}}
Blockly.Msg.COLOUR_BLEND_RATIO = 'ratio';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#blending-colours https://github.com/google/blockly/wiki/Colour#blending-colours].
Blockly.Msg.COLOUR_BLEND_TOOLTIP = 'Blends two colours together with a given ratio (0.0 - 1.0).';

// Loop Blocks.
/** @type {string} */
/// {{Optional}} url - Describes 'repeat loops' in computer programs; consider using the translation of the page [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_REPEAT_HELPURL = 'https://en.wikipedia.org/wiki/For_loop';
/** @type {string} */
/// block input text - Title of [https://github.com/google/blockly/wiki/Loops#repeat repeat block].  Parameters: * %1 - the number of times the body of the loop should be repeated.
Blockly.Msg.CONTROLS_REPEAT_TITLE = 'repeat %1 times';
/** @type {string} */
/// block text - Preceding the blocks in the body of the loop.  See [https://github.com/google/blockly/wiki/Loops https://github.com/google/blockly/wiki/Loops]. {{Identical|Do}}
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = 'do';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat https://github.com/google/blockly/wiki/Loops#repeat].
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = 'Do some statements several times.';
/** @type {string} */
/// {{Optional}} url - Describes 'while loops' in computer programs; consider using the translation of [https://en.wikipedia.org/wiki/While_loop https://en.wikipedia.org/wiki/While_loop], if present, or [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = 'https://github.com/google/blockly/wiki/Loops#repeat';
/** @type {string} */
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/** @type {string} */
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-while repeat while] the following condition is true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'repeat while';
/** @type {string} */
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-until repeat until] the following condition becomes true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'repeat until';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'While a value is true, then do some statements.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-until https://github.com/google/blockly/wiki/Loops#repeat-until].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'While a value is false, then do some statements.';

/** @type {string} */
/// {{Optional}} url - Describes 'for loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/For_loop https://en.wikipedia.org/wiki/For_loop], if present.
Blockly.Msg.CONTROLS_FOR_HELPURL = 'https://github.com/google/blockly/wiki/Loops#count-with';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#count-with https://github.com/google/blockly/wiki/Loops#count-with].  Parameters: * %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOR_TOOLTIP = 'Have the variable "%1" take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.';
/** @type {string} */
/// block text - Repeatedly counts a variable (%1)
/// starting with a (usually lower) number in a range (%2),
/// ending with a (usually higher) number in a range (%3), and counting the
/// iterations by a number of steps (%4).  As in
/// [https://github.com/google/blockly/wiki/Loops#count-with
/// https://github.com/google/blockly/wiki/Loops#count-with].
/// [[File:Blockly-count-with.png]]
Blockly.Msg.CONTROLS_FOR_TITLE = 'count with %1 from %2 to %3 by %4';
/** @type {string} */
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;

/** @type {string} */
/// {{Optional}} url - Describes 'for-each loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Foreach https://en.wikipedia.org/wiki/Foreach] if present.
Blockly.Msg.CONTROLS_FOREACH_HELPURL = 'https://github.com/google/blockly/wiki/Loops#for-each';
/** @type {string} */
/// block text - Title of [https://github.com/google/blockly/wiki/Loops#for-each for each block].
/// Sequentially assigns every item in array %2 to the valiable %1.
Blockly.Msg.CONTROLS_FOREACH_TITLE = 'for each item %1 in list %2';
/** @type {string} */
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/** @type {string} */
/// block text - Description of [https://github.com/google/blockly/wiki/Loops#for-each for each blocks].  Parameters: * %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = 'For each item in a list, set the variable "%1" to the item, and then do some statements.';

/** @type {string} */
/// {{Optional}} url - Describes control flow in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow], if it exists.
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = 'https://github.com/google/blockly/wiki/Loops#loop-termination-blocks';
/** @type {string} */
/// dropdown - The current loop should be exited.  See [https://github.com/google/blockly/wiki/Loops#break https://github.com/google/blockly/wiki/Loops#break].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out of loop';
/** @type {string} */
/// dropdown - The current iteration of the loop should be ended and the next should begin.  See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration of loop';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#break-out-of-loop https://github.com/google/blockly/wiki/Loops#break-out-of-loop].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Skip the rest of this loop, and continue with the next iteration.';
/** @type {string} */
/// warning - The user has tried placing a block outside of a loop (for each, while, repeat, etc.), but this type of block may only be used within a loop.  See [https://github.com/google/blockly/wiki/Loops#loop-termination-blocks https://github.com/google/blockly/wiki/Loops#loop-termination-blocks].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning: This block may only be used within a loop.';

// Logic Blocks.
/** @type {string} */
/// {{Optional}} url - Describes conditional statements (if-then-else) in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_else https://en.wikipedia.org/wiki/If_else], if present.
Blockly.Msg.CONTROLS_IF_HELPURL = 'https://github.com/google/blockly/wiki/IfElse';
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-blocks 'if' blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = 'If a value is true, then do some statements.';
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-blocks if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = 'If a value is true, then do the first block of statements. Otherwise, do the second block of statements.';
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-blocks if-else-if blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.';
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-else-blocks if-else-if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].
/// It is recommended, but not essential, that this have text in common with the translation of 'else if' {{Identical|If}}
Blockly.Msg.CONTROLS_IF_MSG_IF = 'if';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English words "otherwise if" would probably be clearer than "else if", but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = 'else if';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English word "otherwise" would probably be superior to "else", but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSE = 'else';
/** @type {string} */
Blockly.Msg.CONTROLS_IF_MSG_THEN = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/** @type {string} */
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this if block.';
/** @type {string} */
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
/** @type {string} */
/// tooltip - Describes the 'else if' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = 'Add a condition to the if block.';
/** @type {string} */
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
/** @type {string} */
/// tooltip - Describes the 'else' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = 'Add a final, catch-all condition to the if block.';

/** @type {string} */
/// button text - Text on a button inside a dialogue window, which will accept or acknowledge the contents of the dialogue when pressed. {{Identical|OK}}
Blockly.Msg.IOS_OK = 'OK';
/** @type {string} */
/// button text - Text on a button inside a dialogue window, which will close or cancel the dialogue when pressed. {{Identical|Cancel}}
Blockly.Msg.IOS_CANCEL = 'Cancel';
/** @type {string} */
/// alert - Title text for an error dialogue. {{Identical|Error}}
Blockly.Msg.IOS_ERROR = 'Error';
/** @type {string} */
/// header text - Title of a section that displays a list of parameters (aka. "inputs") that have been defined for a procedure. This is used inside a dialogue window to configure a procedure. {{Identical|Input}}
Blockly.Msg.IOS_PROCEDURES_INPUTS = 'INPUTS';
/** @type {string} */
/// button text - Text on a button which will add a parameter (aka. "input") to a procedure. This is used inside a dialogue window to configure a procedure. NOTE: The "+" should be preserved at the beginning of the text.
Blockly.Msg.IOS_PROCEDURES_ADD_INPUT = '+ Add Input';
/** @type {string} */
/// option text - Text describing an option to allow statements to be added within a procedure. This is used inside a dialogue window to configure a procedure.
Blockly.Msg.IOS_PROCEDURES_ALLOW_STATEMENTS = 'Allow statements';
/** @type {string} */
/// alert - Error message when duplicate parameters (aka. "inputs") have been defined on a procedure. This is used inside a dialogue window to configure procedure parameters.
Blockly.Msg.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR = 'This function has duplicate inputs.';
/** @type {string} */
/// button text - Text on a button which will open a variable creation dialogue when pressed. NOTE: The "+" should be preserved at the beginning of the text.
Blockly.Msg.IOS_VARIABLES_ADD_VARIABLE = '+ Add Variable';
/** @type {string} */
/// button text - Text on a button inside a variable creation dialogue, which will add a variable when pressed. {{Identical|Add}}
Blockly.Msg.IOS_VARIABLES_ADD_BUTTON = 'Add';
/** @type {string} */
/// button text - Text on a button inside a variable rename dialogue, which will rename a variable when pressed. {{Identical|Rename}}
Blockly.Msg.IOS_VARIABLES_RENAME_BUTTON = 'Rename';
/** @type {string} */
/// button text - Text on a button inside a variable deletion dialogue, which will delete a variable when pressed. {{Identical|Delete}}
Blockly.Msg.IOS_VARIABLES_DELETE_BUTTON = 'Delete';
/** @type {string} */
/// placeholder text - Placeholder text used inside a text input, where a variable name should be entered.
Blockly.Msg.IOS_VARIABLES_VARIABLE_NAME = 'Variable name';
/** @type {string} */
/// alert - Error message that is displayed when the user attempts to create a variable without a name.
Blockly.Msg.IOS_VARIABLES_EMPTY_NAME_ERROR = 'You can\'t use an empty variable name.';

/** @type {string} */
/// {{Optional}} url - Information about comparisons.
Blockly.Msg.LOGIC_COMPARE_HELPURL = 'https://en.wikipedia.org/wiki/Inequality_(mathematics)';
/** @type {string} */
/// tooltip - Describes the equals (=) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = 'Return true if both inputs equal each other.';
/** @type {string} */
/// tooltip - Describes the not equals (≠) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = 'Return true if both inputs are not equal to each other.';
/** @type {string} */
/// tooltip - Describes the less than (<) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = 'Return true if the first input is smaller than the second input.';
/** @type {string} */
/// tooltip - Describes the less than or equals (≤) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = 'Return true if the first input is smaller than or equal to the second input.';
/** @type {string} */
/// tooltip - Describes the greater than (>) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = 'Return true if the first input is greater than the second input.';
/** @type {string} */
/// tooltip - Describes the greater than or equals (≥) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = 'Return true if the first input is greater than or equal to the second input.';

/** @type {string} */
/// {{Optional}} url - Information about the Boolean conjunction ("and") and disjunction ("or") operators.  Consider using the translation of [https://en.wikipedia.org/wiki/Boolean_logic https://en.wikipedia.org/wiki/Boolean_logic], if it exists in your language.
Blockly.Msg.LOGIC_OPERATION_HELPURL = 'https://github.com/google/blockly/wiki/Logic#logical-operations';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = 'Return true if both inputs are true.';
/** @type {string} */
/// block text - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction]. {{Identical|And}}
Blockly.Msg.LOGIC_OPERATION_AND = 'and';
/** @type {string} */
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = 'Return true if at least one of the inputs is true.';
/** @type {string} */
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction]. {{Identical|Or}}
Blockly.Msg.LOGIC_OPERATION_OR = 'or';

/** @type {string} */
/// {{Optional}} url - Information about logical negation.  The translation of [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation] is recommended if it exists in the target language.
Blockly.Msg.LOGIC_NEGATE_HELPURL = 'https://github.com/google/blockly/wiki/Logic#not';
/** @type {string} */
/// block text - This is a unary operator that returns ''false'' when the input is ''true'', and ''true'' when the input is ''false''.
///   Parameters: * %1 - the input (which should be either the value "true" or "false")
Blockly.Msg.LOGIC_NEGATE_TITLE = 'not %1';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation].
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false. Returns false if the input is true.';

/** @type {string} */
/// {{Optional}} url - Information about the logic values ''true'' and ''false''.  Consider using the translation of [https://en.wikipedia.org/wiki/Truth_value https://en.wikipedia.org/wiki/Truth_value] if it exists in your language.
Blockly.Msg.LOGIC_BOOLEAN_HELPURL = 'https://github.com/google/blockly/wiki/Logic#values';
/** @type {string} */
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''true''. {{Identical|True}}
Blockly.Msg.LOGIC_BOOLEAN_TRUE = 'true';
/** @type {string} */
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''false''. {{Identical|False}}
Blockly.Msg.LOGIC_BOOLEAN_FALSE = 'false';
/** @type {string} */
/// tooltip - Indicates that the block returns either of the two possible [https://en.wikipedia.org/wiki/Truth_value logical values].
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = 'Returns either true or false.';

/** @type {string} */
/// {{Optional}} url - Provide a link to the translation of [https://en.wikipedia.org/wiki/Nullable_type https://en.wikipedia.org/wiki/Nullable_type], if it exists in your language; otherwise, do not worry about translating this advanced concept.
Blockly.Msg.LOGIC_NULL_HELPURL = 'https://en.wikipedia.org/wiki/Nullable_type';
/** @type {string} */
/// block text - In computer languages, ''null'' is a special value that indicates that no value has been set.  You may use your language's word for "nothing" or "invalid". {{Identical|Null}}
Blockly.Msg.LOGIC_NULL = 'null';
/** @type {string} */
/// tooltip - This should use the word from the previous message.
Blockly.Msg.LOGIC_NULL_TOOLTIP = 'Returns null.';

/** @type {string} */
/// {{Optional}} url - Describes the programming language operator known as the ''ternary'' or ''conditional'' operator.  It is recommended that you use the translation of [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:] if it exists.
Blockly.Msg.LOGIC_TERNARY_HELPURL = 'https://en.wikipedia.org/wiki/%3F:';
/** @type {string} */
/// block input text - Label for the input whose value determines which of the other two inputs is returned.  In some programming languages, this is called a ''''predicate''''.
Blockly.Msg.LOGIC_TERNARY_CONDITION = 'test';
/** @type {string} */
/// block input text - Indicates that the following input should be returned (used as output) if the test input is true.  Remember to try to keep block text terse (short).
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = 'if true';
/** @type {string} */
/// block input text - Indicates that the following input should be returned (used as output) if the test input is false.
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = 'if false';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:].
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = 'Check the condition in "test". If the condition is true, returns the "if true" value; otherwise returns the "if false" value.';

// Math Blocks.
/** @type {string} */
/// {{Optional}} url - Information about (real) numbers.
Blockly.Msg.MATH_NUMBER_HELPURL = 'https://en.wikipedia.org/wiki/Number';
/** @type {string} */
/// tooltip - Any positive or negative number, not necessarily an integer.
Blockly.Msg.MATH_NUMBER_TOOLTIP = 'A number.';

/** @type {string} */
/// {{Optional}} math - The symbol for the binary operation addition.
Blockly.Msg.MATH_ADDITION_SYMBOL = '+';
/** @type {string} */
/// {{Optional}} math - The symbol for the binary operation indicating that the right operand should be
/// subtracted from the left operand.
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = '-';
/** @type {string} */
/// {{Optional}} math - The binary operation indicating that the left operand should be divided by
/// the right operand.
Blockly.Msg.MATH_DIVISION_SYMBOL = '÷';
/** @type {string} */
/// {{Optional}} math - The symbol for the binary operation multiplication.
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = '×';
/** @type {string} */
/// {{Optional}} math - The symbol for the binary operation exponentiation.  Specifically, if the
/// value of the left operand is L and the value of the right operand (the exponent) is
/// R, multiply L by itself R times.  (Fractional and negative exponents are also legal.)
Blockly.Msg.MATH_POWER_SYMBOL = '^';

/** @type {string} */
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_SIN = 'sin';
/** @type {string} */
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_COS = 'cos';
/** @type {string} */
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_TAN = 'tan';
/** @type {string} */
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_ASIN = 'asin';
/** @type {string} */
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_ACOS = 'acos';
/** @type {string} */
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_ATAN = 'atan';

/** @type {string} */
/// {{Optional}} url - Information about addition, subtraction, multiplication, division, and exponentiation.
Blockly.Msg.MATH_ARITHMETIC_HELPURL = 'https://en.wikipedia.org/wiki/Arithmetic';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = 'Return the sum of the two numbers.';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Subtraction https://en.wikipedia.org/wiki/Subtraction].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = 'Return the difference of the two numbers.';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Multiplication https://en.wikipedia.org/wiki/Multiplication].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Return the product of the two numbers.';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Division_(mathematics) https://en.wikipedia.org/wiki/Division_(mathematics)].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Return the quotient of the two numbers.';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Exponentiation https://en.wikipedia.org/wiki/Exponentiation].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = 'Return the first number raised to the power of the second number.';

/** @type {string} */
/// {{Optional}} url - Information about the square root operation.
Blockly.Msg.MATH_SINGLE_HELPURL = 'https://en.wikipedia.org/wiki/Square_root';
/** @type {string} */
/// dropdown - This computes the positive [https://en.wikipedia.org/wiki/Square_root square root] of its input.  For example, the square root of 16 is 4.
Blockly.Msg.MATH_SINGLE_OP_ROOT = 'square root';
/** @type {string} */
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = 'Return the square root of a number.';
/** @type {string} */
/// dropdown - This leaves positive numeric inputs changed and inverts negative inputs.  For example, the absolute value of 5 is 5; the absolute value of -5 is also 5.  For more information, see [https://en.wikipedia.org/wiki/Absolute_value https://en.wikipedia.org/wiki/Absolute_value].
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = 'absolute';
/** @type {string} */
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = 'Return the absolute value of a number.';

/** @type {string} */
/// tooltip - Calculates '''0-n''', where '''n''' is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = 'Return the negation of a number.';
/** @type {string} */
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Natural_logarithm|natural logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = 'Return the natural logarithm of a number.';
/** @type {string} */
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Common_logarithm common logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = 'Return the base 10 logarithm of a number.';
/** @type {string} */
/// tooltip - Multiplies [https://en.wikipedia.org/wiki/E_(mathematical_constant) e] by itself n times, where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = 'Return e to the power of a number.';
/** @type {string} */
/// tooltip - Multiplies 10 by itself n times, where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = 'Return 10 to the power of a number.';

/** @type {string} */
/// {{Optional}} url - Information about the trigonometric functions sine, cosine, tangent, and their inverses (ideally using degrees, not radians).
Blockly.Msg.MATH_TRIG_HELPURL = 'https://en.wikipedia.org/wiki/Trigonometric_functions';
/** @type {string} */
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = 'Return the sine of a degree (not radian).';
/** @type {string} */
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = 'Return the cosine of a degree (not radian).';
/** @type {string} */
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = 'Return the tangent of a degree (not radian).';
/** @type {string} */
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent sine function], using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = 'Return the arcsine of a number.';
/** @type {string} */
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent cosine] function, using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = 'Return the arccosine of a number.';
/** @type {string} */
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent tangent] function, using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = 'Return the arctangent of a number.';

/** @type {string} */
/// {{Optional}} url - Information about the mathematical constants Pi (π), e, the golden ratio (φ), √ 2, √ 1/2, and infinity (∞).
Blockly.Msg.MATH_CONSTANT_HELPURL = 'https://en.wikipedia.org/wiki/Mathematical_constant';
/** @type {string} */
/// tooltip - Provides the specified [https://en.wikipedia.org/wiki/Mathematical_constant mathematical constant].
Blockly.Msg.MATH_CONSTANT_TOOLTIP = 'Return one of the common constants: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).';
/** @type {string} */
/// dropdown - A number is '''even''' if it is a multiple of 2.  For example, 4 is even (yielding true), but 3 is not (false).
Blockly.Msg.MATH_IS_EVEN = 'is even';
/** @type {string} */
/// dropdown - A number is '''odd''' if it is not a multiple of 2.  For example, 3 is odd (yielding true), but 4 is not (false).  The opposite of "odd" is "even".
Blockly.Msg.MATH_IS_ODD = 'is odd';
/** @type {string} */
/// dropdown - A number is [https://en.wikipedia.org/wiki/Prime prime] if it cannot be evenly divided by any positive integers except for 1 and itself.  For example, 5 is prime, but 6 is not because 2 × 3 = 6.
Blockly.Msg.MATH_IS_PRIME = 'is prime';
/** @type {string} */
/// dropdown - A number is '''whole''' if it is an [https://en.wikipedia.org/wiki/Integer integer].  For example, 5 is whole, but 5.1 is not.
Blockly.Msg.MATH_IS_WHOLE = 'is whole';
/** @type {string} */
/// dropdown - A number is '''positive''' if it is greater than 0.  (0 is neither negative nor positive.)
Blockly.Msg.MATH_IS_POSITIVE = 'is positive';
/** @type {string} */
/// dropdown - A number is '''negative''' if it is less than 0.  (0 is neither negative nor positive.)
Blockly.Msg.MATH_IS_NEGATIVE = 'is negative';
/** @type {string} */
/// dropdown - A number x is divisible by y if y goes into x evenly.  For example, 10 is divisible by 5, but 10 is not divisible by 3.
Blockly.Msg.MATH_IS_DIVISIBLE_BY = 'is divisible by';
/** @type {string} */
/// tooltip - This block lets the user specify via a dropdown menu whether to check if the numeric input is even, odd, prime, whole, positive, negative, or divisible by a given value.
Blockly.Msg.MATH_IS_TOOLTIP = 'Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.';

/** @type {string} */
/// {{Optional}} url - Information about incrementing (increasing the value of) a variable.
/// For other languages, just use the translation of the Wikipedia page about
/// addition ([https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition]).
Blockly.Msg.MATH_CHANGE_HELPURL = 'https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter';
/** @type {string} */
/// - As in: ''change'' [the value of variable] ''item'' ''by'' 1 (e.g., if the variable named 'item' had the value 5, change it to 6).
/// %1 is a variable name.
/// %2 is the amount of change.
Blockly.Msg.MATH_CHANGE_TITLE = 'change %1 by %2';
/** @type {string} */
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/** @type {string} */
/// tooltip - This updates the value of the variable by adding to it the following numeric input.  Parameters: * %1 - the name of the variable whose value should be increased.
Blockly.Msg.MATH_CHANGE_TOOLTIP = 'Add a number to variable "%1".';

/** @type {string} */
/// {{Optional}} url - Information about how numbers are rounded to the nearest integer
Blockly.Msg.MATH_ROUND_HELPURL = 'https://en.wikipedia.org/wiki/Rounding';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Rounding https://en.wikipedia.org/wiki/Rounding].
Blockly.Msg.MATH_ROUND_TOOLTIP = 'Round a number up or down.';
/** @type {string} */
/// dropdown - This rounds its input to the nearest whole number.  For example, 3.4 is rounded to 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = 'round';
/** @type {string} */
/// dropdown - This rounds its input up to the nearest whole number.  For example, if the input was 2.2, the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = 'round up';
/** @type {string} */
/// dropdown - This rounds its input down to the nearest whole number.  For example, if the input was 3.8, the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = 'round down';

/** @type {string} */
/// {{Optional}} url - Information about applying a function to a list of numbers.  (We were unable to find such information in English.  Feel free to skip this and any other URLs that are difficult.)
Blockly.Msg.MATH_ONLIST_HELPURL = '';
/** @type {string} */
/// dropdown - This computes the sum of the numeric elements in the list.  For example, the sum of the list {1, 4} is 5.
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = 'sum of list';
/** @type {string} */
/// tooltip - Please use the same term for "sum" as in the previous message.
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = 'Return the sum of all the numbers in the list.';
/** @type {string} */
/// dropdown - This finds the smallest (minimum) number in a list.  For example, the smallest number in the list [-5, 0, 3] is -5.
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = 'min of list';
/** @type {string} */
/// tooltip - Please use the same term for "min" or "minimum" as in the previous message.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = 'Return the smallest number in the list.';
/** @type {string} */
/// dropdown - This finds the largest (maximum) number in a list.  For example, the largest number in the list [-5, 0, 3] is 3.
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = 'max of list';
/** @type {string} */
/// tooltip
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = 'Return the largest number in the list.';
/** @type {string} */
/// dropdown - This adds up all of the numbers in a list and divides the sum by the number of elements in the list.  For example, the [https://en.wikipedia.org/wiki/Arithmetic_mean average] of the list [1, 2, 3, 4] is 2.5 (10/4).
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = 'average of list';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Arithmetic_mean https://en.wikipedia.org/wiki/Arithmetic_mean] for more informatin.
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = 'Return the average (arithmetic mean) of the numeric values in the list.';
/** @type {string} */
/// dropdown - This finds the [https://en.wikipedia.org/wiki/Median median] of the numeric values in a list.  For example, the median of the list {1, 2, 7, 12, 13} is 7.
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = 'median of list';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Median median https://en.wikipedia.org/wiki/Median median] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = 'Return the median number in the list.';
/** @type {string} */
/// dropdown - This finds the most common numbers ([https://en.wikipedia.org/wiki/Mode_(statistics) modes]) in a list.  For example, the modes of the list {1, 3, 9, 3, 9}  are {3, 9}.
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = 'modes of list';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Mode_(statistics) https://en.wikipedia.org/wiki/Mode_(statistics)] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = 'Return a list of the most common item(s) in the list.';
/** @type {string} */
/// dropdown - This finds the [https://en.wikipedia.org/wiki/Standard_deviation standard deviation] of the numeric values in a list.
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = 'standard deviation of list';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Standard_deviation https://en.wikipedia.org/wiki/Standard_deviation] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = 'Return the standard deviation of the list.';
/** @type {string} */
/// dropdown - This choose an element at random from a list.  Each element is chosen with equal probability.
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = 'random item of list';
/** @type {string} */
/// tooltip - Please use same term for 'random' as in previous entry.
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = 'Return a random element from the list.';

/** @type {string} */
/// {{Optional}} url - information about the modulo (remainder) operation.
Blockly.Msg.MATH_MODULO_HELPURL = 'https://en.wikipedia.org/wiki/Modulo_operation';
/** @type {string} */
/// block text - Title of block providing the remainder when dividing the first numerical input by the second.  For example, the remainder of 10 divided by 3 is 1.  Parameters: * %1 - the dividend (10, in our example) * %2 - the divisor (3 in our example).
Blockly.Msg.MATH_MODULO_TITLE = 'remainder of %1 ÷ %2';
/** @type {string} */
/// tooltip - For example, the remainder of 10 divided by 3 is 1.
Blockly.Msg.MATH_MODULO_TOOLTIP = 'Return the remainder from dividing the two numbers.';

/** @type {string} */
/// {{Optional}} url - Information about constraining a numeric value to be in a specific range.  (The English URL is not ideal.  Recall that translating URLs is the lowest priority.)
Blockly.Msg.MATH_CONSTRAIN_HELPURL = 'https://en.wikipedia.org/wiki/Clamping_(graphics)';
/** @type {string} */
/// block text - The title of the block that '''constrain'''s (forces) a number to be in a given range.
///For example, if the number 150 is constrained to be between 5 and 100, the result will be 100.
///  Parameters: * %1 - the value to constrain (e.g., 150) * %2 - the minimum value (e.g., 5) * %3 - the maximum value (e.g., 100).
Blockly.Msg.MATH_CONSTRAIN_TITLE = 'constrain %1 low %2 high %3';
/** @type {string} */
/// tooltip - This compares a number ''x'' to a low value ''L'' and a high value ''H''.  If ''x'' is less then ''L'', the result is ''L''.  If ''x'' is greater than ''H'', the result is ''H''.  Otherwise, the result is ''x''.
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = 'Constrain a number to be between the specified limits (inclusive).';

/** @type {string} */
/// {{Optional}} url - Information about how computers generate random numbers.
Blockly.Msg.MATH_RANDOM_INT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/** @type {string} */
/// block text - The title of the block that generates a random integer (whole number) in the specified range.  For example, if the range is from 5 to 7, this returns 5, 6, or 7 with equal likelihood. %1 is a placeholder for the lower number, %2 is the placeholder for the larger number.
Blockly.Msg.MATH_RANDOM_INT_TITLE = 'random integer from %1 to %2';
/** @type {string} */
/// tooltip - Return a random integer between two values specified as inputs.  For example, if one input was 7 and another 9, any of the numbers 7, 8, or 9 could be produced.
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = 'Return a random integer between the two specified limits, inclusive.';

/** @type {string} */
/// {{Optional}} url - Information about how computers generate random numbers (specifically, numbers in the range from 0 to just below 1).
Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/** @type {string} */
/// block text - The title of the block that generates a random number greater than or equal to 0 and less than 1.
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = 'random fraction';
/** @type {string} */
/// tooltip - Return a random fraction between 0 and 1.  The value may be equal to 0 but must be less than 1.
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = 'Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).';

/** @type {string} */
/// {{Optional}} url - Information about how to calculate atan2.
Blockly.Msg.MATH_ATAN2_HELPURL = 'https://en.wikipedia.org/wiki/Atan2';
/** @type {string} */
/// block text - The title of the block that calculates atan2 of point (X, Y).  For example, if the point is (-1, -1), this returns -135. %1 is a placeholder for the X coordinate, %2 is the placeholder for the Y coordinate.
Blockly.Msg.MATH_ATAN2_TITLE = 'atan2 of X:%1 Y:%2';
/** @type {string} */
/// tooltip - Return the arctangent of point (X, Y) in degrees from -180 to 180. For example, if the point is (-1, -1) this returns -135.
Blockly.Msg.MATH_ATAN2_TOOLTIP = 'Return the arctangent of point (X, Y) in degrees from -180 to 180.';

// Text Blocks.
/** @type {string} */
/// {{Optional}} url - Information about how computers represent text (sometimes referred to as ''string''s).
Blockly.Msg.TEXT_TEXT_HELPURL = 'https://en.wikipedia.org/wiki/String_(computer_science)';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text https://github.com/google/blockly/wiki/Text].
Blockly.Msg.TEXT_TEXT_TOOLTIP = 'A letter, word, or line of text.';

/** @type {string} */
/// {{Optional}} url - Information on concatenating/appending pieces of text.
Blockly.Msg.TEXT_JOIN_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-creation';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation].
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = 'create text with';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation create text with] for more information.
Blockly.Msg.TEXT_JOIN_TOOLTIP = 'Create a piece of text by joining together any number of items.';

/** @type {string} */
/// block text - This is shown when the programmer wants to change the number of pieces of text being joined together.  See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section. {{Identical|Join}}
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = 'join';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this text block.';
/** @type {string} */
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Add an item to the text.';

/** @type {string} */
/// {{Optional}} url - This and the other text-related URLs are going to be hard to translate.  As always, it is okay to leave untranslated or paste in the English-language URL.  For these URLs, you might also consider a general URL about how computers represent text (such as the translation of [https://en.wikipedia.org/wiki/String_(computer_science) this Wikipedia page]).
Blockly.Msg.TEXT_APPEND_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/** @type {string} */
/// block input text - Message that the variable name at %1 will have the item at %2 appended to it.
/// [[File:blockly-append-text.png]]
Blockly.Msg.TEXT_APPEND_TITLE = 'to %1 append text %2';
/** @type {string} */
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-modification https://github.com/google/blockly/wiki/Text#text-modification] for more information.  Parameters: * %1 - the name of the variable to which text should be appended
Blockly.Msg.TEXT_APPEND_TOOLTIP = 'Append some text to variable "%1".';

/** @type {string} */
/// {{Optional}} url - Information about text on computers (usually referred to as 'strings').
Blockly.Msg.TEXT_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
///   Parameters: * %1 - the piece of text to take the length of
Blockly.Msg.TEXT_LENGTH_TITLE = 'length of %1';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
Blockly.Msg.TEXT_LENGTH_TOOLTIP = 'Returns the number of letters (including spaces) in the provided text.';

/** @type {string} */
/// {{Optional}} url - Information about empty pieces of text on computers (usually referred to as 'empty strings').
Blockly.Msg.TEXT_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Text#checking-for-empty-text';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
///   Parameters: * %1 - the piece of text to test for emptiness
Blockly.Msg.TEXT_ISEMPTY_TITLE = '%1 is empty';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = 'Returns true if the provided text is empty.';

/** @type {string} */
/// {{Optional}} url - Information about finding a character in a piece of text.
Blockly.Msg.TEXT_INDEXOF_HELPURL = 'https://github.com/google/blockly/wiki/Text#finding-text';
/** @type {string} */
/// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode. See [https://github.com/google/blockly/wiki/Text#finding-text https://github.com/google/blockly/wiki/Text#finding-text].
Blockly.Msg.TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.';
/** @type {string} */
/// block text - Title of blocks allowing users to find text.  See
/// [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].
/// [[File:Blockly-find-text.png]].
/// In English the expanded message is "in text %1 find (first|last) occurance of text %3"
/// where %1 and %3 are added by the user. See TEXT_INDEXOF_OPERATOR_FIRST and
/// TEXT_INDEXOF_OPERATOR_LAST for the dropdown text that replaces %2.
Blockly.Msg.TEXT_INDEXOF_TITLE = 'in text %1 %2 %3';
/** @type {string} */
/// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = 'find first occurrence of text';
/** @type {string} */
/// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].  This would
/// replace "find first occurrence of text" below.  (For more information on
/// how common text is factored out of dropdown menus, see
/// [https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus
/// https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus)].)
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = 'find last occurrence of text';
/** @type {string} */

/// {{Optional}} url - Information about extracting characters (letters, number, symbols, etc.) from text.
Blockly.Msg.TEXT_CHARAT_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-text';
/** @type {string} */
/// block text - Text for a block to extract a letter (or number,
/// punctuation character, etc.) from a string, as shown below. %1 is added by
/// the user and %2 is replaced by a dropdown of options, possibly followed by
/// another user supplied string. TEXT_CHARAT_TAIL is then added to the end.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TITLE = 'in text %1 %2';
/** @type {string} */
/// dropdown - Indicates that the letter (or number, punctuation character, etc.) with the
/// specified index should be obtained from the preceding piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FROM_START = 'get letter #';
/** @type {string} */
/// block text - Indicates that the letter (or number, punctuation character, etc.) with the
/// specified index from the end of a given piece of text should be obtained. See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FROM_END = 'get letter # from end';
/** @type {string} */
/// block text - Indicates that the first letter of the following piece of text should be
/// retrieved.  See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FIRST = 'get first letter';
/** @type {string} */
/// block text - Indicates that the last letter (or number, punctuation mark, etc.) of the
/// following piece of text should be retrieved.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_LAST = 'get last letter';
/** @type {string} */
/// block text - Indicates that any letter (or number, punctuation mark, etc.) in the
/// following piece of text should be randomly selected.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_RANDOM = 'get random letter';
/** @type {string} */
/// block text - Text that goes after the rightmost block/dropdown when getting a single letter from
/// a piece of text, as in [https://blockly-demo.appspot.com/static/apps/code/index.html#3m23km these
/// blocks] or shown below.  For most languages, this will be blank.
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TAIL = '';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';

/** @type {string} */
/// See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP = 'Returns a specified portion of the text.';
/** @type {string} */
/// {{Optional}} url - Information about extracting characters from text.  Reminder: urls are the
/// lowest priority translations.  Feel free to skip.
Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text';
/** @type {string} */
/// block text - Precedes a piece of text from which a portion should be extracted.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = 'in text';
/** @type {string} */
/// dropdown - Indicates that the following number specifies the position (relative to the start
/// position) of the beginning of the region of text that should be obtained from the preceding
/// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START = 'get substring from letter #';
/** @type {string} */
/// dropdown - Indicates that the following number specifies the position (relative to the end
/// position) of the beginning of the region of text that should be obtained from the preceding
/// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// Note: If {{msg-blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this and any other
/// [https://translatewiki.net/wiki/Translating:Blockly#Ordinal_numbers ordinal numbers]
/// on this block.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END = 'get substring from letter # from end';
/** @type {string} */
/// block text - Indicates that a region starting with the first letter of the preceding piece
/// of text should be extracted.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST = 'get substring from first letter';
/** @type {string} */
/// dropdown - Indicates that the following number specifies the position (relative to
/// the start position) of the end of the region of text that should be obtained from the
/// preceding piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START = 'to letter #';
/** @type {string} */
/// dropdown - Indicates that the following number specifies the position (relative to the
/// end position) of the end of the region of text that should be obtained from the preceding
/// piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END = 'to letter # from end';
/** @type {string} */
/// block text - Indicates that a region ending with the last letter of the preceding piece
/// of text should be extracted.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST = 'to last letter';
/** @type {string} */
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// extracting a region of text].  In most languages, this will be the empty string.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_TAIL = '';

/** @type {string} */
/// {{Optional}} url - Information about the case of letters (upper-case and lower-case).
Blockly.Msg.TEXT_CHANGECASE_HELPURL = 'https://github.com/google/blockly/wiki/Text#adjusting-text-case';
/** @type {string} */
/// tooltip - Describes a block to adjust the case of letters.  For more information on this block,
/// see [https://github.com/google/blockly/wiki/Text#adjusting-text-case
/// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = 'Return a copy of the text in a different case.';
/** @type {string} */
/// block text - Indicates that all of the letters in the following piece of text should be
/// capitalized.  If your language does not use case, you may indicate that this is not
/// applicable to your language.  For more information on this block, see
/// [https://github.com/google/blockly/wiki/Text#adjusting-text-case
/// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'to UPPER CASE';
/** @type {string} */
/// block text - Indicates that all of the letters in the following piece of text should be converted to lower-case.  If your language does not use case, you may indicate that this is not applicable to your language.  For more information on this block, see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = 'to lower case';
/** @type {string} */
/// block text - Indicates that the first letter of each of the following words should be capitalized and the rest converted to lower-case.  If your language does not use case, you may indicate that this is not applicable to your language.  For more information on this block, see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = 'to Title Case';

/** @type {string} */
/// {{Optional}} url - Information about trimming (removing) text off the beginning and ends of pieces of text.
Blockly.Msg.TEXT_TRIM_HELPURL = 'https://github.com/google/blockly/wiki/Text#trimming-removing-spaces';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
Blockly.Msg.TEXT_TRIM_TOOLTIP = 'Return a copy of the text with spaces removed from one or both ends.';
/** @type {string} */
/// dropdown - Removes spaces from the beginning and end of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].  Note that neither
/// this nor the other options modify the original piece of text (that follows);
/// the block just returns a version of the text without the specified spaces.
Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH = 'trim spaces from both sides of';
/** @type {string} */
/// dropdown - Removes spaces from the beginning of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
/// Note that in right-to-left scripts, this will remove spaces from the right side.
Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT = 'trim spaces from left side of';
/** @type {string} */
/// dropdown - Removes spaces from the end of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
/// Note that in right-to-left scripts, this will remove spaces from the left side.
Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT = 'trim spaces from right side of';

/** @type {string} */
/// {{Optional}} url - Information about displaying text on computers.
Blockly.Msg.TEXT_PRINT_HELPURL = 'https://github.com/google/blockly/wiki/Text#printing-text';
/** @type {string} */
/// block text - Display the input on the screen.  See
/// [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
///   Parameters: * %1 - the value to print
Blockly.Msg.TEXT_PRINT_TITLE = 'print %1';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.';
/** @type {string} */
/// {{Optional}} url - Information about getting text from users.
Blockly.Msg.TEXT_PROMPT_HELPURL = 'https://github.com/google/blockly/wiki/Text#getting-input-from-the-user';
/** @type {string} */
/// dropdown - Specifies that a piece of text should be requested from the user with
/// the following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = 'prompt for text with message';
/** @type {string} */
/// dropdown - Specifies that a number should be requested from the user with the
/// following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = 'prompt for number with message';
/** @type {string} */
/// dropdown - Precedes the message with which the user should be prompted for
/// a number.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = 'Prompt for user for a number.';
/** @type {string} */
/// dropdown - Precedes the message with which the user should be prompted for some text.
/// See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = 'Prompt for user for some text.';

/** @type {string} */
/// block text - Title of a block that counts the number of instances of
/// a smaller pattern (%1) inside a longer string (%2).
Blockly.Msg.TEXT_COUNT_MESSAGE0 = 'count %1 in %2';
/** @type {string} */
/// {{Optional}} url - Information about counting how many times a string appears in another string.
Blockly.Msg.TEXT_COUNT_HELPURL = 'https://github.com/google/blockly/wiki/Text#counting-substrings';
/** @type {string} */
/// tooltip - Short description of a block that counts how many times some text occurs within some other text.
Blockly.Msg.TEXT_COUNT_TOOLTIP = 'Count how many times some text occurs within some other text.';

/** @type {string} */
/// block text - Title of a block that returns a copy of text (%3) with all
/// instances of some smaller text (%1) replaced with other text (%2).
Blockly.Msg.TEXT_REPLACE_MESSAGE0 = 'replace %1 with %2 in %3';
/** @type {string} */
/// {{Optional}} url - Information about replacing each copy text (or string, in computer lingo) with other text.
Blockly.Msg.TEXT_REPLACE_HELPURL = 'https://github.com/google/blockly/wiki/Text#replacing-substrings';
/** @type {string} */
/// tooltip - Short description of a block that replaces copies of text in a large text with other text.
Blockly.Msg.TEXT_REPLACE_TOOLTIP = 'Replace all occurances of some text within some other text.';

/** @type {string} */
/// block text - Title of block that returns a copy of text (%1) with the order
/// of letters and characters reversed.
Blockly.Msg.TEXT_REVERSE_MESSAGE0 = 'reverse %1';
/** @type {string} */
/// {{Optional}} url - Information about reversing a letters/characters in text.
Blockly.Msg.TEXT_REVERSE_HELPURL = 'https://github.com/google/blockly/wiki/Text#reversing-text';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text].
Blockly.Msg.TEXT_REVERSE_TOOLTIP = 'Reverses the order of the characters in the text.';

// Lists Blocks.
/** @type {string} */
/// {{Optional}} url - Information on empty lists.
Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-empty-list';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = 'create empty list';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = 'Returns a list, of length 0, containing no data records';

/** @type {string} */
/// {{Optional}} url - Information on building lists.
Blockly.Msg.LISTS_CREATE_WITH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = 'Create a list with any number of items.';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = 'create list with';
/** @type {string} */
/// block text - This appears in a sub-block when [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs changing the number of inputs in a ''''create list with'''' block]. {{Identical|List}}
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'list';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the list.';

/** @type {string} */
/// {{Optional}} url - Information about [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
Blockly.Msg.LISTS_REPEAT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
/** @type {string} */
/// {{Optional}} url - See [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
Blockly.Msg.LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value repeated the specified number of times.';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with
/// https://github.com/google/blockly/wiki/Lists#create-list-with].
///  Parameters: * %1 - the item (text) to be repeated * %2 - the number of times to repeat it
Blockly.Msg.LISTS_REPEAT_TITLE = 'create list with item %1 repeated %2 times';

/** @type {string} */
/// {{Optional}} url - Information about how the length of a list is computed (i.e., by the total number of elements, not the number of different elements).
Blockly.Msg.LISTS_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#length-of';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of].
///   Parameters: * %1 - the list whose length is desired
Blockly.Msg.LISTS_LENGTH_TITLE = 'length of %1';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of Blockly:Lists:length of].
Blockly.Msg.LISTS_LENGTH_TOOLTIP = 'Returns the length of a list.';

/** @type {string} */
/// {{Optional}} url - See [https://github.com/google/blockly/wiki/Lists#is-empty https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.LISTS_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#is-empty';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
///   Parameters: * %1 - the list to test
Blockly.Msg.LISTS_ISEMPTY_TITLE = '%1 is empty';
/** @type {string} */
/// block tooltip - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = 'Returns true if the list is empty.';

/** @type {string} */
/// block text - Title of blocks operating on [https://github.com/google/blockly/wiki/Lists lists].
Blockly.Msg.LISTS_INLIST = 'in list';

/** @type {string} */
/// {{Optional}} url - See [https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list
/// https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list].
Blockly.Msg.LISTS_INDEX_OF_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/** @type {string} */
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_FIRST = 'find first occurrence of item';
/** @type {string} */
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_LAST = 'find last occurrence of item';
/** @type {string} */
/// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode.  See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.';

/** @type {string} */
Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
/** @type {string} */
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get an item from a list] without removing it from the list.
Blockly.Msg.LISTS_GET_INDEX_GET = 'get';
/** @type {string} */
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get and remove an item from a list], as opposed to merely getting
/// it without modifying the list.
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = 'get and remove';
/** @type {string} */
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#removing-an-item
/// remove an item from a list]. {{Identical|Remove}}
Blockly.Msg.LISTS_GET_INDEX_REMOVE = 'remove';
/** @type {string} */
/// dropdown - Indicates that an index relative to the front of the list should be used to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item get and/or remove
/// an item from a list].  Note: If {{msg-blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_START = '#';
/** @type {string} */
/// dropdown - Indicates that an index relative to the end of the list should be used
/// to [https://github.com/google/blockly/wiki/Lists#getting-a-single-item access an item in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_END = '# from end';
/** @type {string} */
/// dropdown - Indicates that the '''first''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FIRST = 'first';
/** @type {string} */
/// dropdown - Indicates that the '''last''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_LAST = 'last';
/** @type {string} */
/// dropdown - Indicates that a '''random''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_RANDOM = 'random';
/** @type {string} */
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// accessing an item from a list].  In most languages, this will be the empty string.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_TAIL = '';
/** @type {string} */
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/** @type {string} */
/// tooltip - Indicates the ordinal number that the first item in a list is referenced by.  %1 will be replaced by either "#0" or "#1" depending on the indexing mode.
Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = '%1 is the first item.';
/** @type {string} */
/// tooltip - Indicates the ordinal number that the last item in a list is referenced by.  %1 will be replaced by either "#0" or "#1" depending on the indexing mode.
Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = '%1 is the last item.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM = 'Returns the item at the specified position in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = 'Returns the first item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = 'Returns the last item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = 'Returns a random item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = 'Removes and returns the item at the specified position in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = 'Removes and returns the first item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = 'Removes and returns the last item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = 'Removes and returns a random item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = 'Removes the item at the specified position in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = 'Removes the first item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = 'Removes the last item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = 'Removes a random item in a list.';
/** @type {string} */
/// {{Optional}} url - Information about putting items in lists.
Blockly.Msg.LISTS_SET_INDEX_HELPURL = 'https://github.com/google/blockly/wiki/Lists#in-list--set';
/** @type {string} */
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/** @type {string} */
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--set
/// Replaces an item in a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_SET = 'set';
/** @type {string} */
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--insert-at
/// Inserts an item into a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_INSERT = 'insert at';
/** @type {string} */
/// block text - The word(s) after the position in the list and before the item to be set/inserted.
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = 'as';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM = 'Sets the item at the specified position in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = 'Sets the first item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = 'Sets the last item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = 'Sets a random item in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = 'Inserts the item at the specified position in a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = 'Inserts the item at the start of a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = 'Append the item to the end of a list.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = 'Inserts the item randomly in a list.';

/** @type {string} */
/// {{Optional}} url - Information describing extracting a sublist from an existing list.
Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-a-sublist';
/** @type {string} */
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/** @type {string} */
/// dropdown - Indicates that an index relative to the front of the list should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
/// Note: If {{msg-blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = 'get sub-list from #';
/** @type {string} */
/// dropdown - Indicates that an index relative to the end of the list should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = 'get sub-list from # from end';
/** @type {string} */
/// dropdown - Indicates that the
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist sublist to extract]
/// should begin with the list's first item.
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = 'get sub-list from first';
/** @type {string} */
/// dropdown - Indicates that an index relative to the front of the list should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = 'to #';
/** @type {string} */
/// dropdown - Indicates that an index relative to the end of the list should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = 'to # from end';
/** @type {string} */
/// dropdown - Indicates that the '''last''' item in the given list should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist the end
/// of the selected sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = 'to last';
/** @type {string} */
/// block text - This appears in the rightmost position ("tail") of the
/// sublist block, as described at
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
/// https://github.com/google/blockly/wiki/Lists#getting-a-sublist].
/// In English and most other languages, this is the empty string.
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = '';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
/// https://github.com/google/blockly/wiki/Lists#getting-a-sublist] for more information.
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = 'Creates a copy of the specified portion of a list.';

/** @type {string} */
/// {{Optional}} url - Information describing sorting a list.
Blockly.Msg.LISTS_SORT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#sorting-a-list';
/** @type {string} */
/// Sort as type %1 (numeric or alphabetic) in order %2 (ascending or descending) a list of items %3. {{Identical|Sort}}
Blockly.Msg.LISTS_SORT_TITLE = 'sort %1 %2 %3';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#sorting-a-list].
Blockly.Msg.LISTS_SORT_TOOLTIP = 'Sort a copy of a list.';
/** @type {string} */
/// sorting order or direction from low to high value for numeric, or A-Z for alphabetic. {{Identical|Ascending}}
Blockly.Msg.LISTS_SORT_ORDER_ASCENDING = 'ascending';
/** @type {string} */
/// sorting order or direction from high to low value for numeric, or Z-A for alphabetic. {{Identical|Descending}}
Blockly.Msg.LISTS_SORT_ORDER_DESCENDING = 'descending';
/** @type {string} */
/// sort by treating each item as a number.
Blockly.Msg.LISTS_SORT_TYPE_NUMERIC = 'numeric';
/** @type {string} */
/// sort by treating each item alphabetically, case-sensitive.
Blockly.Msg.LISTS_SORT_TYPE_TEXT = 'alphabetic';
/** @type {string} */
/// sort by treating each item alphabetically, ignoring differences in case.
Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE = 'alphabetic, ignore case';

/** @type {string} */
/// {{Optional}} url - Information describing splitting text into a list, or joining a list into text.
Blockly.Msg.LISTS_SPLIT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists';
/** @type {string} */
/// dropdown - Indicates that text will be split up into a list (e.g. "a-b-c" -> ["a", "b", "c"]).
Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT = 'make list from text';
/** @type {string} */
/// dropdown - Indicates that a list will be joined together to form text (e.g. ["a", "b", "c"] -> "a-b-c").
Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST = 'make text from list';
/** @type {string} */
/// block text - Prompts for a letter to be used as a separator when splitting or joining text.
Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER = 'with delimiter';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-list-from-text
/// https://github.com/google/blockly/wiki/Lists#make-list-from-text] for more information.
Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT = 'Split text into a list of texts, breaking at each delimiter.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-text-from-list
/// https://github.com/google/blockly/wiki/Lists#make-text-from-list] for more information.
Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN = 'Join a list of texts into one text, separated by a delimiter.';

/** @type {string} */
/// {{Optional}} url - Information describing reversing a list.
Blockly.Msg.LISTS_REVERSE_HELPURL = 'https://github.com/google/blockly/wiki/Lists#reversing-a-list';
/** @type {string} */
/// block text - Title of block that returns a copy of a list (%1) with the order of items reversed.
Blockly.Msg.LISTS_REVERSE_MESSAGE0 = 'reverse %1';
/** @type {string} */
/// tooltip - Short description for a block that reverses a copy of a list.
Blockly.Msg.LISTS_REVERSE_TOOLTIP = 'Reverse a copy of a list.';

/** @type {string} */
/// grammar - Text that follows an ordinal number (a number that indicates
/// position relative to other numbers).  In most languages, such text appears
/// before the number, so this should be blank.  An exception is Hungarian.
/// See [[Translating:Blockly#Ordinal_numbers]] for more information.
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = '';

// Variables Blocks.
/** @type {string} */
/// {{Optional}} url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)], if it exists.
Blockly.Msg.VARIABLES_GET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#get';
/** @type {string} */
/// tooltip - This gets the value of the named variable without modifying it.
Blockly.Msg.VARIABLES_GET_TOOLTIP = 'Returns the value of this variable.';
/** @type {string} */
/// context menu - Selecting this creates a block to set (change) the value of this variable.
///   Parameters: * %1 - the name of the variable.
Blockly.Msg.VARIABLES_GET_CREATE_SET = 'Create "set %1"';

/** @type {string} */
/// {{Optional}} url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)], if it exists.
Blockly.Msg.VARIABLES_SET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#set';
/** @type {string} */
/// block text - Change the value of a mathematical variable: '''set [the value of] x to 7'''.  Parameters: * %1 - the name of the variable. * %2 - the value to be assigned.
Blockly.Msg.VARIABLES_SET = 'set %1 to %2';
/** @type {string} */
/// tooltip - This initializes or changes the value of the named variable.
Blockly.Msg.VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input.';
/** @type {string} */
/// context menu - Selecting this creates a block to get (change) the value of
/// this variable.  Parameters: * %1 - the name of the variable.
Blockly.Msg.VARIABLES_SET_CREATE_GET = 'Create "get %1"';

// Procedures Blocks.
/** @type {string} */
/// {{Optional}} url - Information about defining [https://en.wikipedia.org/wiki/Subroutine functions] that do not have return values.
Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/** @type {string} */
/// block text - This precedes the name of the function when defining it.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#c84aoc this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = 'to';
/** @type {string} */
/// default name - This acts as a placeholder for the name of a function on a
/// function definition block, as shown on
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#w7cfju this block].
/// The user will replace it with the function's name.
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = 'do something';
/** @type {string} */
/// block text - This precedes the list of parameters on a function's definition block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = 'with:';
/** @type {string} */
/// block text - This precedes the list of parameters on a function's caller block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = 'with:';
/** @type {string} */
/// block text - This appears next to the function's "body", the blocks that should be
/// run when the function is called, as shown in
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = '';
/** @type {string} */
/// tooltip
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = 'Creates a function with no output.';
/** @type {string} */
/// Placeholder text that the user is encouraged to replace with a description of what their function does.
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = 'Describe this function...';
/** @type {string} */
/// {{Optional}} url - Information about defining [https://en.wikipedia.org/wiki/Subroutine functions] that have return values.
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/** @type {string} */
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE;
/** @type {string} */
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
/** @type {string} */
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
/** @type {string} */
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;
/** @type {string} */
/// block text - This imperative or infinite verb precedes the value that is used as the return value
/// (output) of this function.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#6ot5y5 this sample
/// function that returns a value].
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = 'return';
/** @type {string} */
/// tooltip
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = 'Creates a function with an output.';
/** @type {string} */
/// Label for a checkbox that controls if statements are allowed in a function.
Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS = 'allow statements';

/** @type {string} */
/// alert - The user has created a function with two parameters that have the same name.  Every parameter must have a different name.
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning: This function has duplicate parameters.';

/** @type {string} */
/// {{Optional}} url - Information about calling [https://en.wikipedia.org/wiki/Subroutine functions] that do not return values.
Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/** @type {string} */
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = 'Run the user-defined function "%1".';

/** @type {string} */
/// {{Optional}} url - Information about calling [https://en.wikipedia.org/wiki/Subroutine functions] that return values.
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/** @type {string} */
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.  Parameters: * %1 - the name of the function.
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = 'Run the user-defined function "%1" and use its output.';

/** @type {string} */
/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block.  It refers to the set of parameters
/// (referred to by the simpler term "inputs") to the function.  See
/// [[Translating:Blockly#function_definitions]]. {{Identical|Input}}
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = 'inputs';
/** @type {string} */
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = 'Add, remove, or reorder inputs to this function.';
/** @type {string} */
/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block].  It appears on the block for
/// adding an individual parameter (referred to by the simpler term "inputs") to the function.
/// See [[Translating:Blockly#function_definitions]].
Blockly.Msg.PROCEDURES_MUTATORARG_TITLE = 'input name:';
/** @type {string} */
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = 'Add an input to the function.';

/** @type {string} */
/// context menu - This appears on the context menu for function calls.  Selecting
/// it causes the corresponding function definition to be highlighted (as shown at
/// [[Translating:Blockly#context_menus]].
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = 'Highlight function definition';
/** @type {string} */
/// context menu - This appears on the context menu for function definitions.
/// Selecting it creates a block to call the function.  Parameters: * %1 - the name of the function. {{Identical|Create}}
Blockly.Msg.PROCEDURES_CREATE_DO = 'Create "%1"';

/** @type {string} */
/// tooltip - If the first value is true, this causes the second value to be returned
/// immediately from the enclosing function.
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = 'If a value is true, then return a second value.';
/** @type {string} */
/// {{Optional}} url - Information about guard clauses.
Blockly.Msg.PROCEDURES_IFRETURN_HELPURL = 'http://c2.com/cgi/wiki?GuardClause';
/** @type {string} */
/// warning - This appears if the user tries to use this block outside of a function definition.
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = 'Warning: This block may be used only within a function definition.';

/** @type {string} */
/// comment text - This text appears in a new workspace comment, to hint that
/// the user can type here.
Blockly.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT = 'Say something...';

/** @type {string} */
/// warning - This appears if the user collapses a block, and blocks inside
/// that block have warnings attached to them. It should inform the user that the
/// block they collapsed contains blocks that have warnings.
Blockly.Msg.COLLAPSED_WARNINGS_WARNING = 'Collapsed blocks contain warnings.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.UNDO = 'Undo';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REDO = 'Redo';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.HIDE = 'Hide Workspace Controls';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.SHOW = 'Show Workspace Controls';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DUPLICATE_BLOCK = 'Duplicate';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.ADD_COMMENT = 'Add Comment';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.EXTERNAL_INPUTS = 'External Inputs';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.INLINE_INPUTS = 'Inline Inputs';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.HORIZONTAL_PARAMETERS = 'Arrange Parameters Horizontally';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.VERTICAL_PARAMETERS = 'Arrange Parameters Vertically';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.CONFIRM_DELETE = 'Confirm deletion';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.COLLAPSE_BLOCK = 'Collapse Block';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.EXPAND_BLOCK = 'Expand Block';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DISABLE_BLOCK = 'Disable Block';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.ENABLE_BLOCK = 'Enable Block';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.HELP = 'Help';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.EXPORT_IMAGE = 'Download Blocks as Image';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.COLLAPSE_ALL = 'Collapse Blocks';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.EXPAND_ALL = 'Expand Blocks';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.ARRANGE_H = 'Arrange Blocks Horizontally';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.ARRANGE_V = 'Arrange Blocks Vertically';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.ARRANGE_S = 'Arrange Blocks Diagonally';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.SORT_W = 'Sort Blocks by Width';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.SORT_H = 'Sort Blocks by Height';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.SORT_C = 'Sort Blocks by Category';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.COPY_TO_BACKPACK = 'Add to Backpack';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.COPY_ALLBLOCKS = 'Copy All Blocks to Backpack';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REMOVE_FROM_BACKPACK = 'Remove from Backpack';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.BACKPACK_GET = 'Paste All Blocks from Backpack';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.BACKPACK_EMPTY = 'Empty the Backpack';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.BACKPACK_CONFIRM_EMPTY = 'Are you sure you want to empty the backpack?';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.BACKPACK_DOC_TITLE = "Backpack Information";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.SHOW_BACKPACK_DOCUMENTATION = "Show Backpack documentation";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.BACKPACK_DOCUMENTATION = "The Backpack is a copy/paste feature. It allows you to copy blocks from one project or screen " +
  " and paste them into another project or screen. " +
  " To copy, you can drag-and-drop blocks into the Backpack. To paste, click on the Backpack icon and " +
  " drag-and-drop blocks into the workspace." +
  "</p><p>If you leave MIT App Inventor with blocks left in your backpack, " +
  " they will be there the next time you login." +
  "</p><p><a href='/reference/other/backpack.html' target='_blank'>Click Here</a> for further documentation and a 'how to' video.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.ENABLE_GRID = 'Enable Workspace Grid';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DISABLE_GRID = 'Disable Workspace Grid';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.ENABLE_SNAPPING = 'Enable Snap to Grid';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DISABLE_SNAPPING = 'Disable Snap to Grid';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DISABLE_ALL_BLOCKS = 'Disable All Blocks';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.ENABLE_ALL_BLOCKS = 'Enable All Blocks';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.HIDE_ALL_COMMENTS = 'Hide All Comments';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.SHOW_ALL_COMMENTS = 'Show All Comments';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.GENERICIZE_BLOCK = 'Make Generic';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.UNGENERICIZE_BLOCK = 'Make Specific';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DOWNLOAD_BLOCKS_AS_PNG = 'Download Blocks as PNG';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.NEW_VARIABLE = 'New variable...';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.RENAME_VARIABLE = 'Rename variable...';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';
/** @type {string} */
/// App Inventor Strings
// Toolbox.
Blockly.Msg.VARIABLE_CATEGORY = 'Variables';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.PROCEDURE_CATEGORY = 'Procedures';

// Warnings/Errors
Blockly.Msg.ERROR_BLOCK_CANNOT_BE_IN_DEFINTION = "This block cannot be in a definition";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.ERROR_SELECT_VALID_ITEM_FROM_DROPDOWN = "Select a valid item in the drop down.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.ERROR_DUPLICATE_EVENT_HANDLER = "This is a duplicate event handler for this component.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.ERROR_COMPONENT_DOES_NOT_EXIST = "Component does not exist";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.ERROR_BLOCK_IS_NOT_DEFINED = "This block is not defined. Delete this block!";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.ERROR_BREAK_ONLY_IN_LOOP = "The break block should be used only within loops";

// Colour Blocks.
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COLOUR_PICKER_HELPURL = '/reference/blocks/colors.html#basic';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_COLOUR_PICKER_TOOLTIP = 'Click the square to pick a color.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_BLACK = 'black';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_WHITE = 'white';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_RED = 'red';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_PINK = 'pink';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_ORANGE = 'orange';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_YELLOW = 'yellow';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_GREEN = 'green';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_CYAN = 'cyan';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_BLUE = 'blue';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_MAGENTA = 'magenta';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_LIGHT_GRAY = 'light gray';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_DARK_GRAY = 'dark gray';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_GRAY = 'gray';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR = 'split color';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_HELPURL = '/reference/blocks/colors.html#split';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_TOOLTIP = "A list of four elements, each in the range 0 to 255, representing the red, green, blue and alpha components.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COLOUR_MAKE_COLOUR = 'make color';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_HELPURL = '/reference/blocks/colors.html#make';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP = "A color with the given red, green, blue, and optionally alpha components";

// Control Blocks
Blockly.Msg.LANG_CATEGORY_CONTROLS = 'Control';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_IF_HELPURL = '/reference/blocks/control.html#if';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_1 = 'If a value is true, then do some statements.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_2 = 'If a value is true, then do the first block of statements. ' +
  'Otherwise, do the second block of statements.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_3 = 'If the first value is true, then do the first block of statements. ' +
  'Otherwise, if the second value is true, do the second block of statements.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_4 = 'If the first value is true, then do the first block of statements. ' +
  'Otherwise, if the second value is true, do the second block of statements. ' +
  'If none of the values are true, do the last block of statements.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_IF_MSG_IF = 'if';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSEIF = 'else if';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSE = 'else';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_IF_MSG_THEN = 'then';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_IF_IF_TITLE_IF = 'if';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_IF_IF_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this if block.';

/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF = 'else if';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = 'Add a condition to the if block.';

/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_IF_ELSE_TITLE_ELSE = 'else';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_IF_ELSE_TOOLTIP = 'Add a final, catch-all condition to the if block.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_HELPURL = '/reference/blocks/control.html#while';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT = 'repeat';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'do';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'while';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'until';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'While a value is true, then do some statements.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'While a value is false, then do some statements.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_1 = 'Runs the blocks in the \'do\' section while the test is '
  + 'true.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_FOR_HELPURL = '';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FOR_INPUT_WITH = 'count with';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FOR_INPUT_FROM = 'from';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FOR_INPUT_TO = 'to';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FOR_INPUT_DO = 'do';

/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_FOR_TOOLTIP = 'Count from a start number to an end number. ' +
  'For each count, set the current count number to ' +
  'variable "%1", and then do some statements.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_FORRANGE_HELPURL = '/reference/blocks/control.html#forrange';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_ITEM = 'for each';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_VAR = 'number';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_START = 'from';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_END = 'to';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_STEP = 'by';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_DO = 'do';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_TEXT = 'for number in range';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_PREFIX = 'for ';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_SUFFIX = ' in range';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_FORRANGE_TOOLTIP = 'Runs the blocks in the \'do\' section for each numeric '
  + 'value in the range from start to end, stepping the value each time.  Use the given '
  + 'variable name to refer to the current value.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_FOREACH_HELPURL = '/reference/blocks/control.html#foreach';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'for each';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_VAR = 'item';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'in list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_DO = 'do';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_TEXT = 'for item in list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_PREFIX = 'for ';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_SUFFIX = ' in list';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_FOREACH_TOOLTIP = 'Runs the blocks in the \'do\'  section for each item in '
  + 'the list.  Use the given variable name to refer to the current list item.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_GET_HELPURL = '/reference/blocks/control.html#get';


/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = 'http://en.wikipedia.org/wiki/Control_flow';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP = 'of loop';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Skip the rest of this loop, and ' +
  'continue with the next iteration.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning: ' +
  'This block may only ' +
  'be used within a loop.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_WHILE_HELPURL = '/reference/blocks/control.html#while';;
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_WHILE_TITLE = 'while';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_TEST = 'test';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_DO = 'do';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_WHILE_COLLAPSED_TEXT = 'while';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_WHILE_TOOLTIP = 'Runs the blocks in the \'do\' section while the test is '
  + 'true.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_CHOOSE_HELPURL = '/reference/blocks/control.html#choose';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CHOOSE_TITLE = 'if';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_TEST = '';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_THEN_RETURN = 'then';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_ELSE_RETURN = 'else';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CHOOSE_COLLAPSED_TEXT = 'if';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_CHOOSE_TOOLTIP = 'If the condition being tested is true,'
  + 'return the result of evaluating the expression attached to the \'then-return\' slot;'
  + 'otherwise return the result of evaluating the expression attached to the \'else-return\' slot;'
  + 'at most one of the return slot expressions will be evaluated.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_HELPURL = '/reference/blocks/control.html#doreturn';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_DO = 'do';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_RETURN = 'result';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TOOLTIP = 'Runs the blocks in \'do\' and returns a statement. Useful if you need to run a procedure before returning a value to a variable.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_COLLAPSED_TEXT = 'do/result';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TITLE = 'do result';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TITLE = 'evaluate but ignore result'
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_HELPURL = '/reference/blocks/control.html#evaluate';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_EVAL_BUT_COLLAPSED_TEXT = 'eval but ignore'
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TOOLTIP = 'Runs the connected block of code and ignores the return value (if any). Useful if need to call a procedure with a return value but don\'t need the value.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_HELPURL = '/reference/blocks/control.html#openscreen';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE = 'open another screen';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_INPUT_SCREENNAME = 'screenName';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_COLLAPSED_TEXT = 'open screen';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TOOLTIP = 'Opens a new screen in a multiple screen app.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_HELPURL = '/reference/blocks/control.html#openscreenwithvalue';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE = 'open another screen with start value';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_SCREENNAME = 'screenName';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_STARTVALUE = 'startValue';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_COLLAPSED_TEXT = 'open screen with value'
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TOOLTIP = 'Opens a new screen in a multiple screen app and passes the '
  + 'start value to that screen.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_HELPURL = '/reference/blocks/control.html#getstartvalue';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TITLE = 'get start value';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_SCREENNAME = 'screenName';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_STARTVALUE = 'startValue';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_COLLAPSED_TEXT = 'get start value';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TOOLTIP = 'Returns the value that was passed to this screen when it '
  + 'was opened, typically by another screen in a multiple-screen app. If no value was '
  + 'passed, returns the empty text.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_HELPURL = '/reference/blocks/control.html#closescreen';;
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TITLE = 'close screen';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_COLLAPSED_TEXT = 'close screen';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TOOLTIP = 'Close the current screen';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_HELPURL = '/reference/blocks/control.html#closescreenwithvalue';;
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TITLE = 'close screen with value';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_INPUT_RESULT = 'result';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_COLLAPSED_TEXT = 'close screen with value';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TOOLTIP = 'Closes the current screen and returns a result to the '
  + 'screen that opened this one.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_HELPURL = '/reference/blocks/control.html#closeapp';;
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TITLE = 'close application';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_COLLAPSED_TEXT = 'close application';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TOOLTIP = 'Closes all screens in this app and stops the app.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_HELPURL = '/reference/blocks/control.html#getplainstarttext';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TITLE = 'get plain start text';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_COLLAPSED_TEXT = 'get plain start text';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TOOLTIP = 'Returns the plain text that was passed to this screen when '
  + 'it was started by another app. If no value was passed, returns the empty text. For '
  + 'multiple screen apps, use get start value rather than get plain start text.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_HELPURL = '/reference/blocks/control.html#closescreenwithplaintext';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TITLE = 'close screen with plain text';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_INPUT_TEXT = 'text';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_COLLAPSED_TEXT = 'close screen with plain text';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TOOLTIP = 'Closes the current screen and returns text to the app that '
  + 'opened this one.   This command is for returning text to non-App Inventor activities, not to App Inventor screens. '
  + 'For App Inventor Screens, as in multiple screen apps, use Close Screen with Value, not Close Screen with Plain Text.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_CONTROLS_BREAK_HELPURL = '/reference/blocks/control.html#break';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_BREAK_TITLE = 'break';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_BREAK_INPUT_TEXT = 'value';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CONTROLS_BREAK_COLLAPSED_TEXT = 'break';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CATEGORY_LOGIC = 'Logic';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL = 'http://en.wikipedia.org/wiki/Inequality_(mathematics)';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_EQ = '/reference/blocks/logic.html#=';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_NEQ = '/reference/blocks/logic.html#not=';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'Tests whether two things are equal.  ' +
  'The things being compared can be any things, not only numbers.  ' +
  'Numbers are considered to be equal to their printed form as strings,  ' +
  'for example, the number 0 is equal to the text \"0\".  Also, two strings  ' +
  'that represent numbers are equal if the numbers are equal, for example  ' +
  '\"1\" is equal to \"01\".';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Return true if both inputs are not equal to each other.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LOGIC_COMPARE_TRANSLATED_NAME = 'logic equal';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LOGIC_COMPARE_EQ = '=';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LOGIC_COMPARE_NEQ = '\u2260';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_AND = '/reference/blocks/logic.html#and';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_OR = '/reference/blocks/logic.html#or';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LOGIC_OPERATION_AND = 'and';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LOGIC_OPERATION_OR = 'or';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Return true if all inputs are true.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Return true if any input is true.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LOGIC_NEGATE_HELPURL = '/reference/blocks/logic.html#not';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LOGIC_NEGATE_INPUT_NOT = 'not';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false. ' +
  'Returns false if the input is true.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE_HELPURL = '/reference/blocks/logic.html#true';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE_HELPURL = '/reference/blocks/logic.html#false';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE = 'true';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE = 'false';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_TRUE = 'Returns the boolean true.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_FALSE = 'Returns the boolean false.';
/** @type {string} */
/// App Inventor Strings
// Math Blocks.
Blockly.Msg.LANG_CATEGORY_MATH = 'Math';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_NUMBER_HELPURL = '/reference/blocks/math.html#number';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_NUMBER_TOOLTIP = 'Report the number shown.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_MUTATOR_ITEM_INPUT_NUMBER = 'number';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_COMPARE_HELPURL = '';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_COMPARE_HELPURL_EQ = '/reference/blocks/math.html#=';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_COMPARE_HELPURL_NEQ = '/reference/blocks/math.html#not=';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LT = '/reference/blocks/math.html#lt';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LTE = '/reference/blocks/math.html#lte';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GT = '/reference/blocks/math.html#gt';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GTE = '/reference/blocks/math.html#gte';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_EQ = 'Return true if both numbers are equal to each other.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_NEQ = 'Return true if both numbers are not equal to each other.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LT = 'Return true if the first number is smaller ' +
  'than the second number.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LTE = 'Return true if the first number is smaller ' +
  'than or equal to the second number.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GT = 'Return true if the first number is greater ' +
  'than the second number.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GTE = 'Return true if the first number is greater ' +
  'than or equal to the second number.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_COMPARE_EQ = '=';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_COMPARE_NEQ = '\u2260';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_COMPARE_LT = '<';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_COMPARE_LTE = '\u2264';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_COMPARE_GT = '>';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_COMPARE_GTE = '\u2265';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_ADD = '/reference/blocks/math.html#add';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MINUS = '/reference/blocks/math.html#subtract';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MULTIPLY = '/reference/blocks/math.html#multiply';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_DIVIDE = '/reference/blocks/math.html#divide';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_POWER = '/reference/blocks/math.html#exponent';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_BITWISE_HELPURL_AND = '/reference/blocks/math.html#bitwise_and';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_BITWISE_HELPURL_IOR = '/reference/blocks/math.html#bitwise_ior';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_BITWISE_HELPURL_XOR = '/reference/blocks/math.html#bitwise_xor';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_ADD = 'Return the sum of the two numbers.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS = 'Return the difference of the two numbers.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Return the product of the two numbers.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Return the quotient of the two numbers.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_POWER = 'Return the first number raised to ' +
  'the power of the second number.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_AND = 'Return the bitwise AND of the two numbers.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_IOR = 'Return the bitwise inclusive OR of the two numbers.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_XOR = 'Return the bitwise exclusive OR of the two numbers.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_ARITHMETIC_ADD = '+';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_ARITHMETIC_MINUS = '-';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_ARITHMETIC_MULTIPLY = '*';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_ARITHMETIC_DIVIDE = '/';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_ARITHMETIC_POWER = '^';

/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_BITWISE_AND = 'bitwise and';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_BITWISE_IOR = 'bitwise or';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_BITWISE_XOR = 'bitwise xor';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_SINGLE_OP_ROOT = 'square root';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_SINGLE_OP_ABSOLUTE = 'absolute';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_SINGLE_OP_NEG = 'neg';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_SINGLE_OP_LN = 'log';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_SINGLE_OP_EXP = 'e^';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Return the square root of a number.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ROOT = '/reference/blocks/math.html#sqrt';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Return the absolute value of a number.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ABS = '/reference/blocks/math.html#abs';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Return the negation of a number.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_SINGLE_HELPURL_NEG = '/reference/blocks/math.html#neg';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_LN = 'Return the natural logarithm of a number, i.e. the logarithm to the base e (2.71828...)';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_SINGLE_HELPURL_LN ='/reference/blocks/math.html#log';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Return e (2.71828...) to the power of a number.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_SINGLE_HELPURL_EXP ='/reference/blocks/math.html#e';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_ROUND = 'Round a number up or down.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_ROUND_HELPURL_ROUND = '/reference/blocks/math.html#round';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_CEILING = 'Rounds the input to the smallest ' +
  'number not less then the input';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_ROUND_HELPURL_CEILING =  '/reference/blocks/math.html#ceiling';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_FLOOR = 'Rounds the input to the largest ' +
  'number not greater then the input';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_ROUND_HELPURL_FLOOR =  '/reference/blocks/math.html#floor';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_ROUND_OPERATOR_ROUND = 'round';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_ROUND_OPERATOR_CEILING = 'ceiling';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_ROUND_OPERATOR_FLOOR = 'floor';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_TRIG_SIN = 'sin';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_TRIG_COS = 'cos';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_TRIG_TAN = 'tan';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_TRIG_ASIN = 'asin';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_TRIG_ACOS = 'acos';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_TRIG_ATAN = 'atan';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_TRIG_ATAN2 = 'atan2';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_TRIG_ATAN2_X = 'x';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_TRIG_ATAN2_Y = 'y';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_SIN = 'Provides the sine of the given angle in degrees.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_TRIG_HELPURL_SIN = '/reference/blocks/math.html#sin';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_COS = 'Provides the cosine of the given angle in degrees.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_TRIG_HELPURL_COS = '/reference/blocks/math.html#cos';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_TAN = 'Provides the tangent of the given angle in degrees.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_TRIG_HELPURL_TAN = '/reference/blocks/math.html#tan';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Provides the angle in the range (-90,+90] ' +
  'degrees with the given sine value.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_TRIG_HELPURL_ASIN = '/reference/blocks/math.html#asin';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Provides the angle in the range [0, 180) ' +
  'degrees with the given cosine value.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_TRIG_HELPURL_ACOS = '/reference/blocks/math.html#acos';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Provides the angle in the range (-90, +90) ' +
  'degrees with the given tangent value.';
ATAN : /** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN = '/reference/blocks/math.html#atan';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN2 = 'Provides the angle in the range (-180, +180] ' +
  'degrees with the given rectangular coordinates.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN2 = '/reference/blocks/math.html#atan2';

/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MIN = 'min';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MAX = 'max';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Return the smallest of its arguments..';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Return the largest of its arguments..';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_ONLIST_HELPURL_MIN = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#min';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_ONLIST_HELPURL_MAX = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#max';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_DIVIDE = '\u00F7';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_MODULO = 'modulo of';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_REMAINDER = 'remainder of';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_QUOTIENT = 'quotient of';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_MODULO = 'Return the modulo.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_MODULO = '/reference/blocks/math.html#modulo';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_REMAINDER = 'Return the remainder.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_REMAINDER = '/reference/blocks/math.html#remainder';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_QUOTIENT = 'Return the quotient.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_QUOTIENT = '/reference/blocks/math.html#quotient';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_RANDOM_INT_HELPURL = '/reference/blocks/math.html#randomint';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_RANDOM_INT_TITLE_RANDOM = 'random integer';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_FROM = 'from';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_TO = 'to';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT = 'random integer from %1 to %2';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_RANDOM_INT_TOOLTIP = 'Returns a random integer between the upper bound ' +
  'and the lower bound. The bounds will be clipped to be smaller ' +
  'than 2**30.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_RANDOM_FLOAT_HELPURL = '/reference/blocks/math.html#randomfrac';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM = 'random fraction';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TOOLTIP = 'Return a random number between 0 and 1.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_RANDOM_SEED_HELPURL = '/reference/blocks/math.html#randomseed';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_RANDOM_SEED_TITLE_RANDOM = 'random set seed';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_RANDOM_SEED_INPUT_TO = 'to';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_RANDOM_SEED_TOOLTIP = 'specifies a numeric seed ' +
  'for the random number generator';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TITLE_CONVERT = 'convert';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_RAD_TO_DEG = 'radians to degrees';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_DEG_TO_RAD = 'degrees to radians';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_RAD_TO_DEG = 'Returns the degree value in the range ' +
  '[0, 360) corresponding to its radians argument.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_RAD_TO_DEG = '/reference/blocks/math.html#convertrad';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_DEG_TO_RAD = 'Returns the radian value in the range ' +
  '[-\u03C0, +\u03C0) corresponding to its degrees argument.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_DEG_TO_RAD = '/reference/blocks/math.html#convertdeg';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_HELPURL = '/reference/blocks/math.html#format';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TITLE = 'format as decimal';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_NUM = 'number';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_PLACES = 'places';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT = 'format as decimal number %1 places %2';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TOOLTIP = 'Returns the number formatted as a decimal ' +
  'with a specified number of places.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_IS_A_NUMBER_HELPURL = '/reference/blocks/math.html#isnumber';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_IS_A_NUMBER_INPUT_NUM = 'is number?';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_IS_A_NUMBER_TOOLTIP = 'Tests if something is a number.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_IS_A_DECIMAL_HELPURL = '/reference/blocks/math.html#isnumber';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_IS_A_DECIMAL_INPUT_NUM = 'is Base 10?';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_IS_A_DECIMAL_TOOLTIP = 'Tests if something is a string that represents a positive base 10 integer.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_HELPURL = '/reference/blocks/math.html#isnumber';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_INPUT_NUM = 'is hexadecimal?';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_TOOLTIP = 'Tests if something is a string that represents a hexadecimal number.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_IS_A_BINARY_HELPURL = '/reference/blocks/math.html#isnumber';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_IS_A_BINARY_INPUT_NUM = 'is binary?';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_IS_A_BINARY_TOOLTIP = 'Tests if something is a string that represents a binary number.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TITLE_CONVERT = 'convert number';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_HEX = 'base 10 to hex';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_HEX = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#convertnumber';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_HEX = 'Takes a positive integer in base 10 and returns the string that represents the number in hexadecimal';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_HEX_TO_DEC = 'hex to base 10';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_HEX_TO_DEC = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#convertnumber';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_HEX_TO_DEC = 'Takes a string that represents a number in hexadecimal and returns the string that represents the number in base 10';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_BIN = 'base 10 to binary';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_BIN = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#convertnumber';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_BIN = 'Takes a positive integer in base 10 and returns the string that represents the number in binary';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_BIN_TO_DEC = 'binary to base 10';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_BIN_TO_DEC = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#convertnumber';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_BIN_TO_DEC = 'Takes a string that represents a number in binary and returns the string that represents the number in base 10';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_CATEGORY_TEXT = 'Text';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_TEXT_HELPURL = '/reference/blocks/text.html#string';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_TEXT_TOOLTIP = 'A text string.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_TEXT_LEFT_QUOTE = '\u201C';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_TEXT_RIGHT_QUOTE = '\u201D';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_JOIN_HELPURL = '/reference/blocks/text.html#join';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_JOIN_TITLE_CREATEWITH = 'create text with';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_JOIN_TOOLTIP = 'Appends all the inputs to form a single text string. If there are no inputs, makes an empty text.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN = 'join';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_JOIN_ITEM_TITLE_ITEM = 'string';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_JOIN_ITEM_TOOLTIP = '';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_APPEND_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_APPEND_TO = 'to';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_APPEND_APPENDTEXT = 'append text';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_APPEND_VARIABLE = 'item';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_APPEND_TOOLTIP = 'Append some text to variable "%1".';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_LENGTH_HELPURL = '/reference/blocks/text.html#length';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_LENGTH_INPUT_LENGTH = 'length';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_LENGTH_TOOLTIP = 'Returns number of letters (including spaces) ' +
  'in the provided text.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_ISEMPTY_HELPURL = '/reference/blocks/text.html#isempty';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'is empty';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_ISEMPTY_TOOLTIP = 'Returns true if the length of the ' + 'text is 0, false otherwise.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_COMPARE_LT = ' <';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_COMPARE_EQUAL = ' =';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_COMPARE_NEQ = ' ≠';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_COMPARE_GT = ' >';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_COMPARE_HELPURL = '/reference/blocks/text.html#compare';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_COMPARE_INPUT_COMPARE = 'compare texts';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_LT = 'Tests whether text1 is lexicographically less than text2. if one text is the prefix of the other, the shorter text is considered smaller. Uppercase characters precede lowercase characters.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_EQUAL = 'Tests whether text strings are identical, ie., have the same characters in the same order. This is different from ordinary = in the case where the text strings are numbers: 123 and 0123 are = but not text =.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_NEQ = 'Tests whether text strings are different, ie., don\'t have the same characters in the same order. This is different from ordinary ≠ in the case where the text strings are numbers: 123 and 0123 are text ≠ but are mathematically =.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_GT = 'Reports whether text1 is lexicographically greater than text2. if one text is the prefix of the other, the shorter text is considered smaller. Uppercase characters precede lowercase characters.';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_TOOLTIP = "Produces text, like a text block.  The difference is that the  "
  + "text is not easily discoverable by examining the app's APK.  Use this when creating apps  "
  + "to distribute that include confidential information, for example, API keys.   "
  + "Warning: This provides only very low security against expert adversaries.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE = 'Obfuscated Text';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_HELPURL = '/reference/blocks/text.html#obfuscatetext';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'upcase';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_DOWNCASE = 'downcase';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_UPPERCASE = 'Returns a copy of its text string argument converted to uppercase.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_UPPERCASE = '/reference/blocks/text.html#upcase';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_DOWNCASE = 'Returns a copy of its text string argument converted to lowercase.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_DOWNCASE = '/reference/blocks/text.html#downcase';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_TRIM_HELPURL = '/reference/blocks/text.html#trim';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_TRIM_TITLE_TRIM = 'trim';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_TRIM_TOOLTIP = 'Returns a copy of its text string arguments with any leading or trailing spaces removed.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_STARTS_AT_HELPURL = '/reference/blocks/text.html#startsat';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_STARTS_AT = 'starts at';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_TEXT = 'text';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_PIECE = 'piece';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT = 'starts at  text %1 piece %2';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_STARTS_AT_TOOLTIP = 'Returns the starting index of the piece in the text. where index 1 denotes the beginning of the text. Returns 0 if the piece is not in the text.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_CONTAINS_HELPURL = '/reference/blocks/text.html#contains';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_CONTAINS = 'contains';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_TEXT = 'text';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_PIECE = 'piece';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_CONTAINS_INPUT = 'contains  text %1 piece %2';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_CONTAINS_TOOLTIP = 'Tests whether the piece is contained in the text.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_SPLIT_HELPURL = '';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_SPLIT_INPUT_TEXT = 'text';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT = 'at';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT_LIST = 'at (list)';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST = 'split at first';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST_OF_ANY = 'split at first of any';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT = 'split';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_ANY = 'split at any';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST = 'Divides the given text into two pieces using the location of the first occurrence of  the text \'at\' as the dividing point, and returns a two-item list consisting of the piece  before the dividing point and the piece after the dividing point.  Splitting "apple,banana,cherry,dogfood" with a comma as the splitting point  returns a list of two items: the first is the text "apple" and the second is the text  "banana,cherry,dogfood".  Notice that the comma after "apple" does not appear in the result,  because that is the dividing point.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST = '/reference/blocks/text.html#splitat';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST_OF_ANY = 'Divides the given text into a two-item list, using the first location of any item  in the list \'at\' as the dividing point. Splitting "I love apples bananas apples grapes" by the list "(ba,ap)" returns  a list of two items, the first being "I love" and the second being  "ples bananas apples grapes."';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST_OF_ANY = '/reference/blocks/text.html#splitatfirstofany';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT = 'Divides text into pieces using the text \'at\' as the dividing points and produces a list of the results.   Splitting "one,two,three,four" at "," (comma) returns the list "(one two three four)".  Splitting "one-potato,two-potato,three-potato,four" at "-potato", returns the list "(one two three four)".';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT = '/reference/blocks/text.html#split';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_ANY = 'Divides the given text into a list, using any of the items in the list \'at\' as the  dividing point, and returns a list of the results.  Splitting "appleberry,banana,cherry,dogfood" with \'at\' as the two-element list whose  first item is a comma and whose second item is "rry" returns a list of four items:  "(applebe banana che dogfood)".';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_ANY = '/reference/blocks/text.html#splitatany';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_HELPURL = '/reference/blocks/text.html#splitspaces';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_TITLE = 'split at spaces';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_SPLIT_AT_TOOLTIP = 'Split the text into pieces separated by spaces.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_SEGMENT_HELPURL = '/reference/blocks/text.html#segment';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_SEGMENT_TITLE_SEGMENT = 'segment';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_START = 'start';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_LENGTH = 'length';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_TEXT = 'text';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_SEGMENT_INPUT = 'segment  text %1 start %2 length %3';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_SEGMENT_AT_TOOLTIP = 'Extracts the segment of the given length from the given text starting from the given text starting from the given position. Position 1 denotes the beginning of the text.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_REPLACE_ALL_HELPURL = '/reference/blocks/text.html#replaceall';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_SEGMENT = 'segment';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_TEXT = 'text';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_REPLACE_ALL_TITLE_REPLACE_ALL = 'replace all';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_REPLACEMENT = 'replacement';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT = 'replace all text %1 segment %2 replacement %3';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_REPLACE_ALL_TOOLTIP = 'Returns a new text obtained by replacing all occurrences of the segment with the replacement.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_HELPURL = '/reference/blocks/text.html#isstring';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TITLE = 'is a string?';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_INPUT_THING = 'thing';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TOOLTIP = 'Returns true if <code>thing</code> is a string.';

// Lists Blocks.
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_CATEGORY_LISTS = 'Lists';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TITLE = 'create empty list';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_CREATE_WITH_EMPTY_HELPURL = '/reference/blocks/lists.html#makealist';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST = 'make a list';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_CREATE_WITH_TOOLTIP = 'Create a list with any number of items.';

/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'list';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TITLE = 'item';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the list.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_ADD_ITEM_TITLE = 'item';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_ADD_ITEM_TOOLTIP = 'Add an item to the list.';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_ADD_ITEM_HELPURL = '/reference/blocks/lists.html#additems';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_HELPURL = '/reference/blocks/lists.html#selectlistitem';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_SELECT = 'select list item';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_LIST = 'list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_INDEX = 'index';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT = 'select list item  list %1 index %2';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_SELECT_ITEM_TOOLTIP = 'Returns the item at position index in the list.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_IS_IN_HELPURL = '/reference/blocks/lists.html#inlist';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_IS_IN_TITLE_IS_IN = 'is in list?';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_IS_IN_INPUT_THING = 'thing';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_IS_IN_INPUT_LIST = 'list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_IS_IN_INPUT = 'is in list? thing %1 list %2'
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_IS_IN_TOOLTIP = 'Returns true if the the thing is an item in the list, and '
  + 'false if not.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_POSITION_IN_HELPURL = '/reference/blocks/lists.html#indexinlist';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_POSITION_IN_TITLE_POSITION = 'index in list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_THING = 'thing';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_LIST = 'list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT = 'index in list  thing %1 list %2';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_POSITION_IN_TOOLTIP = 'Find the position of the thing in the list. If it\'s not in '
  + 'the list, return 0.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_HELPURL = '/reference/blocks/lists.html#pickrandomitem';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_PICK_RANDOM_TITLE_PICK_RANDOM = 'pick a random item';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_INPUT_LIST = 'list';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_PICK_RANDOM_TOOLTIP = 'Pick an item at random from the list.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_REPLACE_ITEM_HELPURL = '/reference/blocks/lists.html#replace';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TITLE_REPLACE = 'replace list item';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_LIST = 'list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_INDEX = 'index';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_REPLACEMENT = 'replacement';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT = 'replace list item  list %1 index %2 replacement %3';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TOOLTIP = 'Replaces the nth item in a list.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_REMOVE_ITEM_HELPURL = '/reference/blocks/lists.html#removeitem';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TITLE_REMOVE = 'remove list item';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_LIST = 'list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_INDEX = 'index';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT = 'remove list item  list %1 index %2';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TOOLTIP = 'Removes the item at the specified position from the list.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_LENGTH_HELPURL = '/reference/blocks/lists.html#lengthoflist';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LENGTH = 'length of list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LIST = 'list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_LENGTH_INPUT = 'length of list list %1';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_LENGTH_TOOLTIP = 'Counts the number of items in a list.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_APPEND_LIST_HELPURL = '/reference/blocks/lists.html#append';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_APPEND_LIST_TITLE_APPEND = 'append to list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST1 = 'list1';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST2 = 'list2';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT = 'append to list  list1 %1 list2 %2';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_APPEND_LIST_TOOLTIP = 'Appends all the items in list2 onto the end of list1. After '
  + 'the append, list1 will include these additional elements, but list2 will be unchanged.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_ADD_ITEMS_HELPURL = '/reference/blocks/lists.html#additems';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_ADD_ITEMS_TITLE_ADD = 'add items to list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_LIST = ' list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_ITEM = 'item';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT = 'add items to list list %1 item %2';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_ADD_ITEMS_TOOLTIP = 'Adds items to the end of a list.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TITLE_ADD = 'list';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_COPY_HELPURL = '/reference/blocks/lists.html#copy';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_COPY_TITLE_COPY = 'copy list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_COPY_INPUT_LIST = 'list';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_COPY_TOOLTIP = 'Makes a copy of a list, including copying all sublists';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_IS_LIST_HELPURL = '/reference/blocks/lists.html#isalist';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_IS_LIST_TITLE_IS_LIST = 'is a list?';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_IS_LIST_INPUT_THING = 'thing';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_IS_LIST_TOOLTIP = 'Tests if something is a list.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_REVERSE_HELPURL = '/reference/blocks/lists.html#reverse';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_REVERSE_TITLE_REVERSE = 'reverse list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_REVERSE_INPUT_LIST = 'list';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_REVERSE_TOOLTIP = 'Reverses the order of input list and returns it as a new list.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_TO_CSV_ROW_HELPURL = '/reference/blocks/lists.html#listtocsvrow';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TITLE_TO_CSV = 'list to csv row';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_TO_CSV_ROW_INPUT_LIST = 'list';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TOOLTIP = 'Interprets the list as a row of a table and returns a CSV '
  + '(comma-separated value) text representing the row. Each item in the row list is '
  + 'considered to be a field, and is quoted with double-quotes in the resulting CSV text. '
  + 'Items are separated by commas. The returned row text does not have a line separator at '
  + 'the end.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_HELPURL = '/reference/blocks/lists.html#listfromcsvrow';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TITLE_FROM_CSV = 'list from csv row';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_INPUT_TEXT = 'text';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TOOLTIP = 'Parses a text as a CSV (comma-separated value) formatted '
  + 'row to produce a list of fields. It is an error for the row text to contain unescaped '
  + 'newlines inside fields (effectively, multiple lines). It is okay for the row text to '
  + 'end in a single newline or CRLF.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_HELPURL = '/reference/blocks/lists.html#listtocsvtable';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TITLE_TO_CSV = 'list to csv table';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_INPUT_LIST = 'list';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TOOLTIP = 'Interprets the list as a table in row-major format and '
  + 'returns a CSV (comma-separated value) text representing the table. Each item in the '
  + 'list should itself be a list representing a row of the CSV table. Each item in the row '
  + 'list is considered to be a field, and is quoted with double-quotes in the resulting CSV '
  + 'text. In the returned text, items in rows are separated by commas and rows are '
  + 'separated by CRLF (\\r\ ).';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_HELPURL = '/reference/blocks/lists.html#listfromcsvtable';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TITLE_FROM_CSV = 'list from csv table';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_INPUT_TEXT = 'text';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TOOLTIP = 'Parses a text as a CSV (comma-separated value) formatted '
  + 'table to produce a list of rows, each of which is a list of fields. Rows can be '
  + 'separated by newlines (\ ) or CRLF (\\r\ ).';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_INSERT_ITEM_HELPURL = '/reference/blocks/lists.html#insert';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_INSERT_TITLE_INSERT_LIST = 'insert list item';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_INSERT_INPUT_LIST = 'list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_INSERT_INPUT_INDEX = 'index';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_INSERT_INPUT_ITEM = 'item';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_INSERT_INPUT = 'insert list item  list %1 index %2 item %3';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_INSERT_TOOLTIP = 'Insert an item into a list at the specified position.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_IS_EMPTY_HELPURL = '/reference/blocks/lists.html#islistempty';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_TITLE_IS_EMPTY = 'is list empty?';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_INPUT_LIST = 'list';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_IS_EMPTY_TOOLTIP = 'Returns true if the list is empty.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_HELPURL = '/reference/blocks/lists.html#lookuppairs';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TITLE_LOOKUP_IN_PAIRS = 'look up in pairs';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_KEY = 'key';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_PAIRS = 'pairs';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_NOT_FOUND = 'notFound';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT = 'look up in pairs  key %1 pairs %2 notFound %3';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TOOLTIP = 'Returns the value associated with the key in the list of pairs';

// Join With Separator block
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_HELPURL = '/reference/blocks/lists.html#joinwithseparator';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_TITLE = 'join with separator';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_SEPARATOR = 'separator';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_LIST = 'list';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_INPUT = 'join items using separator %1 list %2';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_TOOLTIP = 'Returns text with list elements joined with separator';
// Variables Blocks.
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_HELPURL = '/reference/blocks/variables.html#global';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TITLE_INIT = 'initialize global';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME = 'name';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TO = 'to';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_COLLAPSED_TEXT = 'global';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TOOLTIP = 'Creates a global variable and gives it the value of the attached blocks.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_GLOBAL_PREFIX = 'global';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_VARIABLES_GET_HELPURL = '/reference/blocks/variables.html#get';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_GET_TITLE_GET = 'get';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_GET_COLLAPSED_TEXT = 'get';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_VARIABLES_GET_TOOLTIP = 'Returns the value of this variable.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_VARIABLES_SET_HELPURL = '/reference/blocks/variables.html#set';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_SET_TITLE_SET = 'set';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_SET_TITLE_TO = 'to';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_SET_COLLAPSED_TEXT = 'set';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_VARIABLE = ' variable';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_HELPURL = '/reference/blocks/variables.html#do';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TITLE_INIT = 'initialize local';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_DEFAULT_NAME = 'name';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_INPUT_TO = 'to';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_IN_DO = 'in';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_COLLAPSED_TEXT = 'local';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TOOLTIP = 'Allows you to create variables that are only accessible in the do part of this block.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TRANSLATED_NAME = 'initialize local in do';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_HELPURL = '/reference/blocks/variables.html#return';
/* // These don't differ between the statement and expression
 Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TITLE_INIT = 'initialize local';
 Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_NAME = 'name';
 Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_TO = 'to';
 */
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_IN_RETURN = 'in';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_COLLAPSED_TEXT = 'local';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TOOLTIP = 'Allows you to create variables that are only accessible in the return part of this block.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TRANSLATED_NAME = 'initialize local in return';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TITLE_LOCAL_NAMES = 'local names';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TOOLTIP = '';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_TITLE_NAME = 'name';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_DEFAULT_VARIABLE = 'x';

// Procedures Blocks.
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_HELPURL = '/reference/blocks/procedures.html#do';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DEFINE = 'to';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'procedure';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO = 'do';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_COLLAPSED_PREFIX = 'to ';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'A procedure that does not return a value.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_HELPURL = '/reference/blocks/procedures.html#doreturn';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_THEN_RETURN = 'result';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_DO = 'do';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_RETURN = 'result';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_TOOLTIP = 'Runs the blocks in \'do\' and returns a statement. Useful if you need to run a procedure before returning a value to a variable.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_COLLAPSED_TEXT = 'do/result';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_PROCEDURES_DEFRETURN_HELPURL = '/reference/blocks/procedures.html#return';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DEFINE = 'to';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DO = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO;
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_DEFRETURN_RETURN = 'result';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_DEFRETURN_COLLAPSED_PREFIX = 'to ';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'A procedure returning a result value.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning: ' +
  'This procedure has ' +
  'duplicate inputs.';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_PROCEDURES_GET_HELPURL = '/reference/blocks/procedures.html#get';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_HELPURL = '/reference/blocks/procedures.html#do';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL = 'call ';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE = 'procedure';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_COLLAPSED_PREFIX = 'call ';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Call a procedure with no return value.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TRANSLATED_NAME = 'call no return';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_PROCEDURES_CALLRETURN_HELPURL = '/reference/blocks/procedures.html#return';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_CALLRETURN_CALL = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL;
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_CALLRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE;
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_CALLRETURN_COLLAPSED_PREFIX = 'call ';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Call a procedure with a return value.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TRANSLATED_NAME = 'call return';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TITLE = 'inputs';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TITLE = 'input:';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Highlight Procedure';

/** @type {string} */
/// tooltip
Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TOOLTIP = '';
/** @type {string} */
/// tooltip
Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TOOLTIP = '';

// Components Blocks.
Blockly.Msg.UNDEFINED_BLOCK_TOOLTIP = "This block is not defined. Delete this block!";

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_HELPURL = '';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_WHEN = 'when ';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_DO = 'do';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_EVENT_TITLE = 'when any ';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_HELPURL = '';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_TITLE_CALL = 'call ';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_HELPURL = '';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_CALL = 'call ';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_FOR_COMPONENT = 'for component';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_GETTER_HELPURL = '';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_HELPURL = '';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_TITLE_OF_COMPONENT = 'of component';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_HELPURL = '';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_SET = 'set ';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_TO = ' to';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_HELPURL = '';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_SET = 'set ';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_TO = ' to';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_OF_COMPONENT = 'of component';

///////////////////
/* HelpURLs for Component Blocks */

//User Interface Components
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_HELPURL = '/reference/components/userinterface.html#Button';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_PROPERTIES_HELPURL = '/reference/components/userinterface.html#Button';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_EVENTS_HELPURL = '/reference/components/userinterface.html#Button';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_HELPURL = '/reference/components/userinterface.html#CheckBox';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_PROPERTIES_HELPURL = '/reference/components/userinterface.html#CheckBox';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_EVENTS_HELPURL = '/reference/components/userinterface.html#CheckBox';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_HELPURL = '/reference/components/sensors.html#Clock';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_PROPERTIES_HELPURL = '/reference/components/sensors.html#Clock';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_EVENTS_HELPURL = '/reference/components/sensors.html#Clock';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_METHODS_HELPURL = '/reference/components/sensors.html#Clock';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_HELPURL = '/reference/components/userinterface.html#Image';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PROPERTIES_HELPURL = '/reference/components/userinterface.html#Image';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EVENTS_HELPURL = '/reference/components/userinterface.html#Image';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_METHODS_HELPURL = '/reference/components/userinterface.html#Image';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_HELPURL = '/reference/components/userinterface.html#Label';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_PROPERTIES_HELPURL = '/reference/components/userinterface.html#Label';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_EVENTS_HELPURL = '/reference/components/userinterface.html#Label';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_METHODS_HELPURL = '/reference/components/userinterface.html#Label';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_HELPURL = '/reference/components/userinterface.html#ListPicker';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_PROPERTIES_HELPURL = '/reference/components/userinterface.html#ListPicker';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_EVENTS_HELPURL = '/reference/components/userinterface.html#ListPicker';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_METHODS_HELPURL = '/reference/components/userinterface.html#ListPicker';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SWITCH_HELPURL = '/reference/components/userinterface.html#Switch';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TIMEPICKER_HELPURL = '/reference/components/userinterface.html#TimePicker';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_DATEPICKER_HELPURL = '/reference/components/userinterface.html#DatePicker';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_LISTVIEW_HELPURL = '/reference/components/userinterface.html#ListView';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_HELPURL = "/reference/components/userinterface.html#Notifier";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_PROPERTIES_HELPURL = '/reference/components/userinterface.html#Notifier';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_EVENTS_HELPURL = '/reference/components/userinterface.html#Notifier';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_METHODS_HELPURL = '/reference/components/userinterface.html#Notifier';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_HELPURL = '/reference/components/userinterface.html#PasswordTextBox';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_PROPERTIES_HELPURL = '/reference/components/userinterface.html#PasswordTextBox';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_EVENTS_HELPURL = '/reference/components/userinterface.html#PasswordTextBox';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_METHODS_HELPURL = '/reference/components/userinterface.html#PasswordTextBox';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_HELPURL = '/reference/components/userinterface.html#Screen';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_PROPERTIES_HELPURL = '/reference/components/userinterface.html#Screen';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_EVENTS_HELPURL = '/reference/components/userinterface.html#Screen';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_METHODS_HELPURL = '/reference/components/userinterface.html#Screen';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_HELPURL = '/reference/components/userinterface.html#Slider';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_PROPERTIES_HELPURL = '/reference/components/userinterface.html#Slider';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_EVENTS_HELPURL = '/reference/components/userinterface.html#Slider';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_METHODS_HELPURL = '/reference/components/userinterface.html#Slider';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SPINNER_HELPURL = '/reference/components/userinterface.html#Spinner';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_HELPURL = '/reference/components/userinterface.html#TextBox';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_PROPERTIES_HELPURL = '/reference/components/userinterface.html#TextBox';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_EVENTS_HELPURL = '/reference/components/userinterface.html#TextBox';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_METHODS_HELPURL = '/reference/components/userinterface.html#TextBox';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_HELPURL = "/reference/components/userinterface.html#WebViewer";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_PROPERTIES_HELPURL = '/reference/components/userinterface.html#WebViewer';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_EVENTS_HELPURL = '/reference/components/userinterface.html#WebViewer';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_METHODS_HELPURL = '/reference/components/userinterface.html#WebViewer';

//Layout components
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZARRANGE_HELPURL = "/reference/components/layout.html#HorizontalArrangement";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZARRANGE_PROPERTIES_HELPURL = '/reference/components/layout.html#HorizontalArrangement';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZSCROLLARRANGE_HELPURL = "/reference/components/layout.html#HorizontalScrollArrangement";

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_VERTARRANGE_HELPURL = "/reference/components/layout.html#VerticalArrangement";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_VERTARRANGE_PROPERTIES_HELPURL = '/reference/components/layout.html#VerticalArrangement';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_VERTSCROLLARRANGE_HELPURL = "/reference/components/layout.html#VerticalScrollArrangement";

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TABLEARRANGE_HELPURL = "/reference/components/layout.html#TableArrangement";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TABLEARRANGE_PROPERTIES_HELPURL = '/reference/components/layout.html#TableArrangement';

//Media components
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_HELPURL = '/reference/components/media.html#Camcorder';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_PROPERTIES_HELPURL = '/reference/components/media.html#Camcorder';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_EVENTS_HELPURL = '/reference/components/media.html#Camcorder';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_METHODS_HELPURL = '/reference/components/media.html#Camcorder';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_HELPURL = '/reference/components/media.html#Camera';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_PROPERTIES_HELPURL = '/reference/components/media.html#Camera';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_EVENTS_HELPURL = '/reference/components/media.html#Camera';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_METHODS_HELPURL = '/reference/components/media.html#Camera';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_HELPURL = '/reference/components/media.html#ImagePicker';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_PROPERTIES_HELPURL = '/reference/components/media.html#ImagePicker';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_EVENTS_HELPURL = '/reference/components/media.html#ImagePicker';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_METHODS_HELPURL = '/reference/components/media.html#ImagePicker';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_HELPURL = '/reference/components/media.html#Player';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_PROPERTIES_HELPURL = '/reference/components/media.html#Player';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_EVENTS_HELPURL = '/reference/components/media.html#Player';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_METHODS_HELPURL = '/reference/components/media.html#Player';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_HELPURL = '/reference/components/media.html#Sound';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_PROPERTIES_HELPURL = '/reference/components/media.html#Sound';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_EVENTS_HELPURL = '/reference/components/media.html#Sound';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_METHODS_HELPURL = '/reference/components/media.html#Sound';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_HELPURL = "/reference/components/media.html#SoundRecorder";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_PROPERTIES_HELPURL = '/reference/components/media.html#SoundRecorder';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_EVENTS_HELPURL = '/reference/components/media.html#SoundRecorder';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_METHODS_HELPURL = '/reference/components/media.html#SoundRecorder';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_HELPURL = "/reference/components/media.html#SpeechRecognizer";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_PROPERTIES_HELPURL = '/reference/components/media.html#SpeechRecognizer';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_EVENTS_HELPURL = '/reference/components/media.html#SpeechRecognizer';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_METHODS_HELPURL = '/reference/components/media.html#SpeechRecognizer';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_HELPURL = "/reference/components/media.html#TextToSpeech";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_PROPERTIES_HELPURL = '/reference/components/media.html#TextToSpeech';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_EVENTS_HELPURL = '/reference/components/media.html#TextToSpeech';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_METHODS_HELPURL = '/reference/components/media.html#TextToSpeech';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_HELPURL = '/reference/components/media.html#VideoPlayer';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_PROPERTIES_HELPURL = '/reference/components/media.html#VideoPlayer';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_EVENTS_HELPURL = '/reference/components/media.html#VideoPlayer';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_METHODS_HELPURL = '/reference/components/media.html#VideoPlayer';

// Drawing and Animation components
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_HELPURL = "/reference/components/animation.html#Ball";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_PROPERTIES_HELPURL = '/reference/components/animation.html#Ball';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_EVENTS_HELPURL = '/reference/components/animation.html#Ball';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_METHODS_HELPURL = '/reference/components/animation.html#Ball';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_HELPURL = '/reference/components/animation.html#Canvas';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_PROPERTIES_HELPURL = '/reference/components/animation.html#Canvas';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_EVENTS_HELPURL = '/reference/components/animation.html#Canvas';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_METHODS_HELPURL = '/reference/components/animation.html#Canvas';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_HELPURL = "/reference/components/animation.html#ImageSprite";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_PROPERTIES_HELPURL = '/reference/components/animation.html#ImageSprite';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_EVENTS_HELPURL = '/reference/components/animation.html#ImageSprite';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_METHODS_HELPURL = '/reference/components/animation.html#ImageSprite';

// Maps components
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_MAPS_HELPURL = "/reference/components/maps.html#Map";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_MAPS_CIRCLE_HELPURL = "/reference/components/maps.html#Circle";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_MAPS_FEATURECOLLECTION_HELPURL = "/reference/components/maps.html#FeatureCollection";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_MAPS_LINESTRING_HELPURL = "/reference/components/maps.html#LineString";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_MAPS_MARKER_HELPURL = "/reference/components/maps.html#Marker";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_MAPS_POLYGON_HELPURL = "/reference/components/maps.html#Polygon";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_MAPS_RECTANGLE_HELPURL = "/reference/components/maps.html#Rectangle";

//Sensor components
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_HELPURL = "/reference/components/sensors.html#AccelerometerSensor";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_PROPERTIES_HELPURL = '/reference/components/sensors.html#AccelerometerSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_EVENTS_HELPURL = '/reference/components/sensors.html#AccelerometerSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_METHODS_HELPURL = '/reference/components/sensors.html#AccelerometerSensor';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_HELPURL = "/reference/components/sensors.html#BarcodeScanner";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_PROPERTIES_HELPURL = '/reference/components/sensors.html#BarcodeScanner';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_EVENTS_HELPURL = '/reference/components/sensors.html#BarcodeScanner';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_METHODS_HELPURL = '/reference/components/sensors.html#BarcodeScanner';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_HELPURL = "/reference/components/sensors.html#GyroscopeSensor";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_PROPERTIES_HELPURL = '/reference/components/sensors.html#GyroscopeSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_EVENTS_HELPURL = '/reference/components/sensors.html#GyroscopeSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_METHODS_HELPURL = '/reference/components/sensors.html#GyroscopeSensor';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_HELPURL = "/reference/components/sensors.html#LocationSensor";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_PROPERTIES_HELPURL = '/reference/components/sensors.html#LocationSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_EVENTS_HELPURL = '/reference/components/sensors.html#LocationSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_METHODS_HELPURL = '/reference/components/sensors.html#LocationSensor';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NEARFIELDSENSOR_HELPURL = "/reference/components/sensors.html#NearField";

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PEDOMETERSENSOR_HELPURL = "/reference/components/sensors.html#Pedometer";

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PROXIMITYSENSOR_HELPURL = "/reference/components/sensors.html#ProximitySensor";

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_HELPURL = "/reference/components/sensors.html#OrientationSensor";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_PROPERTIES_HELPURL = '/reference/components/sensors.html#OrientationSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_EVENTS_HELPURL = '/reference/components/sensors.html#OrientationSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_METHODS_HELPURL = '/reference/components/sensors.html#OrientationSensor';

//Social components
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_HELPURL = "/reference/components/social.html#ContactPicker";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_PROPERTIES_HELPURL = '/reference/components/social.html#ContactPicker';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_EVENTS_HELPURL = '/reference/components/social.html#ContactPicker';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_METHODS_HELPURL = '/reference/components/social.html#ContactPicker';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_HELPURL = "/reference/components/social.html#EmailPicker";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_PROPERTIES_HELPURL = '/reference/components/social.html#EmailPicker';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_EVENTS_HELPURL = '/reference/components/social.html#EmailPicker';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_METHODS_HELPURL = '/reference/components/social.html#EmailPicker';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_HELPURL = "/reference/components/social.html#PhoneCall";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_PROPERTIES_HELPURL = '/reference/components/social.html#PhoneCall';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_EVENTS_HELPURL = '/reference/components/social.html#PhoneCall';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_METHODS_HELPURL = '/reference/components/social.html#PhoneCall';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_HELPURL = "/reference/components/social.html#PhoneNumberPicker";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_PROPERTIES_HELPURL = '/reference/components/social.html#PhoneNumberPicker';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_EVENTS_HELPURL = '/reference/components/social.html#PhoneNumberPicker';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_METHODS_HELPURL = '/reference/components/social.html#PhoneNumberPicker';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_HELPURL = "/reference/components/social.html#Texting";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_PROPERTIES_HELPURL = '/reference/components/social.html#Texting';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_EVENTS_HELPURL = '/reference/components/social.html#Texting';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_METHODS_HELPURL = '/reference/components/social.html#Texting';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_SHARING_HELPURL = "/reference/components/social.html#Sharing";

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_HELPURL = "/reference/components/social.html#Twitter";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_PROPERTIES_HELPURL = '/reference/components/social.html#Twitter';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_EVENTS_HELPURL = '/reference/components/social.html#Twitter';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_METHODS_HELPURL = '/reference/components/social.html#Twitter';

//Storage Components
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_HELPURL = "/reference/components/storage.html#FusionTablesControl";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_PROPERTIES_HELPURL = '/reference/components/storage.html#FusionTablesControl';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_EVENTS_HELPURL = '/reference/components/storage.html#FusionTablesControl';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_METHODS_HELPURL = '/reference/components/storage.html#FusionTablesControl';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_FILE_HELPURL = "/reference/components/storage.html#File";

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_HELPURL = '/reference/components/storage.html#TinyDB';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_PROPERTIES_HELPURL = '/reference/components/storage.html#TinyDB';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_EVENTS_HELPURL = '/reference/components/storage.html#TinyDB';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_METHODS_HELPURL = '/reference/components/storage.html#TinyDB';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_HELPURL = "/reference/components/storage.html#TinyWebDB";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_PROPERTIES_HELPURL = '/reference/components/storage.html#TinyWebDB';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_EVENTS_HELPURL = '/reference/components/storage.html#TinyWebDB';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_METHODS_HELPURL = '/reference/components/storage.html#TinyWebDB';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDDB_HELPURL = "/reference/components/storage.html#CloudDB";

//Connectivity components
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_HELPURL = "/reference/components/connectivity.html#ActivityStarter";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_PROPERTIES_HELPURL = '/reference/components/connectivity.html#ActivityStarter';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_EVENTS_HELPURL = '/reference/components/connectivity.html#ActivityStarter';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_METHODS_HELPURL = '/reference/components/connectivity.html#ActivityStarter';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_HELPURL = "/reference/components/connectivity.html#BluetoothClient";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_PROPERTIES_HELPURL = '/reference/components/connectivity.html#BluetoothClient';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_EVENTS_HELPURL = '/reference/components/connectivity.html#BluetoothClient';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_METHODS_HELPURL = '/reference/components/connectivity.html#BluetoothClient';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_HELPURL = "/reference/components/connectivity.html#BluetoothServer";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_PROPERTIES_HELPURL = '/reference/components/connectivity.html#BluetoothServer';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_EVENTS_HELPURL = '/reference/components/connectivity.html#BluetoothServer';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_METHODS_HELPURL = '/reference/components/connectivity.html#BluetoothServer';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_HELPURL = "/reference/components/connectivity.html#Web";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_PROPERTIES_HELPURL = '/reference/components/connectivity.html#Web';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_EVENTS_HELPURL = '/reference/components/connectivity.html#Web';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_METHODS_HELPURL = '/reference/components/connectivity.html#Web';

//Lego mindstorms components
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_HELPURL = "/reference/components/legomindstorms.html#NxtDirectCommands";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#NxtDirectCommands';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_METHODS_HELPURL = '/reference/components/legomindstorms.html#NxtDirectCommands';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_HELPURL = "/reference/components/legomindstorms.html#NxtColorSensor";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#NxtColorSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_EVENTS_HELPURL = '/reference/components/legomindstorms.html#NxtColorSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_METHODS_HELPURL = '/reference/components/legomindstorms.html#NxtColorSensor';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_HELPURL = "/reference/components/legomindstorms.html#NxtLightSensor";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#NxtLightSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_EVENTS_HELPURL = '/reference/components/legomindstorms.html#NxtLightSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_METHODS_HELPURL = '/reference/components/legomindstorms.html#NxtLightSensor';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_HELPURL = "/reference/components/legomindstorms.html#NxtSoundSensor";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#NxtSoundSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_EVENTS_HELPURL = '/reference/components/legomindstorms.html#NxtSoundSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_METHODS_HELPURL = '/reference/components/legomindstorms.html#NxtSoundSensor';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_HELPURL = "/reference/components/legomindstorms.html#NxtTouchSensor";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#NxtTouchSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_EVENTS_HELPURL = '/reference/components/legomindstorms.html#NxtTouchSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_METHODS_HELPURL = '/reference/components/legomindstorms.html#NxtTouchSensor';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_HELPURL = "/reference/components/legomindstorms.html#NxtUltrasonicSensor";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#NxtUltrasonicSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_EVENTS_HELPURL = '/reference/components/legomindstorms.html#NxtUltrasonicSensor';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_METHODS_HELPURL = '/reference/components/legomindstorms.html#NxtUltrasonicSensor';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_HELPURL = "/reference/components/legomindstorms.html#NxtDrive";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#NxtDrive';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_METHODS_HELPURL = '/reference/components/legomindstorms.html#NxtDrive';

Blockly.Msg.LANG_COMPONENT_BLOCK_EV3MOTORS_HELPURL = "/reference/components/legomindstorms.html#Ev3Motors";
Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COLORSENSOR_HELPURL = "/reference/components/legomindstorms.html#Ev3ColorSensor";
Blockly.Msg.LANG_COMPONENT_BLOCK_EV3GYROSENSOR_HELPURL = "/reference/components/legomindstorms.html#Ev3GyroSensor";
Blockly.Msg.LANG_COMPONENT_BLOCK_EV3TOUCHSENSOR_HELPURL = "/reference/components/legomindstorms.html#Ev3TouchSensor";
Blockly.Msg.LANG_COMPONENT_BLOCK_EV3ULTRASONICSENSOR_HELPURL = "/reference/components/legomindstorms.html#Ev3UltrasonicSensor";
Blockly.Msg.LANG_COMPONENT_BLOCK_EV3SOUND_HELPURL = "/reference/components/legomindstorms.html#Ev3Sound";
Blockly.Msg.LANG_COMPONENT_BLOCK_EV3UI_HELPURL = "/reference/components/legomindstorms.html#Ev3UI";
Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COMMANDS_HELPURL = "/reference/components/legomindstorms.html#Ev3Commands";


//Experimental components
// FirebaseDB
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_HELPURL = "/reference/components/experimental.html#FirebaseDB";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_PROPERTIES_HELPURL = "/reference/components/experimental.html#FirebaseDB";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_EVENTS_HELPURL = "/reference/components/experimental.html#FirebaseDB";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_METHODS_HELPURL = "/reference/components/experimental.html#FirebaseDB";

//Internal components
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_HELPURL = "/reference/components/internal.html#GameClient";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_PROPERTIES_HELPURL = '/reference/components/internal.html#GameClient';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_EVENTS_HELPURL = '/reference/components/internal.html#GameClient';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_METHODS_HELPURL = '/reference/components/internal.html#GameClient';

/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_HELPURL = "/reference/components/internal.html#Voting";
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_PROPERTIES_HELPURL = '/reference/components/internal.html#votingproperties';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_EVENTS_HELPURL = '/reference/components/internal.html#votingevents';
/** @type {string} */
/// {{Optional}} url
Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_METHODS_HELPURL = '/reference/components/internal.html#votingmethods';

//Misc
Blockly.Msg.SHOW_WARNINGS = "Show Warnings";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.HIDE_WARNINGS = "Hide Warnings";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.MISSING_SOCKETS_WARNINGS = "You should fill all of the sockets with blocks";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.WRONG_TYPE_BLOCK_WARINGS = "This block should be connected to an event block or a procedure definition";

// Messages from replmgr.js
Blockly.Msg.REPL_ERROR_FROM_COMPANION = "Error from Companion";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_NETWORK_CONNECTION_ERROR = "Network Connection Error";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_NETWORK_ERROR = "Network Error";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_NETWORK_ERROR_RESTART = "Network Error Communicating with Companion.<br />Try restarting the Companion and reconnecting";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_OK = "OK";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_COMPANION_VERSION_CHECK = "Companion Version Check";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_COMPANION_OUT_OF_DATE = 'Your Companion App is out of date. Click "OK" to start the update. Watch your ';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_COMPANION_OUT_OF_DATE2 = 'Your Companion App is out of date. Restart the Companion and use it to scan the QRCode below in order to update';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_EMULATORS = "emulator's";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_DEVICES = "device's";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_APPROVE_UPDATE = " screen because you will be asked to approve the update.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_NOT_NOW = "Not Now";
Blockly.Msg.REPL_COMPANION_OUT_OF_DATE1 = "The Companion you are using is out of date.<br/><br/>This Version of App Inventor should be used with Companion version";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_COMPANION_OUT_OF_DATE_IMMEDIATE = "You are using an out-of-date Companion. You should update the MIT AI2 Companion as soon as possible. If you have auto-update setup in the store, the update will happen by itself shortly.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_COMPANION_WRONG_PACKAGE = "The Companion you are using was built for different instance of App Inventor. To obtain the correct companion look on the App Inventor screen under Help->Companion Information menu.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_DISMISS = "Dismiss";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_SOFTWARE_UPDATE = "Software Update";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_OK_LOWER = "Ok";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_GOT_IT = "Got It";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_UPDATE_INFO = 'The update is now being installed on your device. Watch your device (or emulator) screen and approve the software installation when prompted.<br /><br />IMPORTANT: When the update finishes, choose "DONE" (don\'t click "open"). Then go to App Inventor in your web browser, click the "Connect" menu and choose "Reset Connection".  Then reconnect the device.';

Blockly.Msg.REPL_UPDATE_NO_UPDATE = "No Update is Available";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_UPDATE_NO_CONNECTION = "You must be connected to a Companion to update it";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_UNABLE_TO_UPDATE = "Unable to send update to device/emulator";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_UNABLE_TO_LOAD = "Unable to load update from App Inventor server";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_UNABLE_TO_LOAD_NO_RESPOND = "Unable to load update from App Inventor server (server not responding)";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_NOW_DOWNLOADING = "We are now downloading update from the App Inventor Server, please standby";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_RUNTIME_ERROR = "Runtime Error";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_NO_ERROR_FIVE_SECONDS = "<br/><i>Note:</i>&nbsp;You will not see another error reported for 5 seconds.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_CONNECTING_USB_CABLE = "Connecting via USB Cable";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_STARTING_EMULATOR = "Starting the Android Emulator<br/>Please wait: This might take a minute or two.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_CONNECTING = "Connecting...";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_CANCEL = "Cancel";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_GIVE_UP = "Give Up";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_KEEP_TRYING = "Keep Trying";
Blockly.Msg.REPL_CONNECTION_FAILURE1 = "Connection Failure";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_NO_START_EMULATOR = "We could not start the MIT AI Companion within the Emulator";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_PLUGGED_IN_Q = "Plugged In?";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_AI_NO_SEE_DEVICE = "AI2 does not see your device, make sure the cable is plugged in and drivers are correct.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_HELPER_Q = "Helper?";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_HELPER_NOT_RUNNING = 'The aiStarter helper does not appear to be running<br /><a href="http://appinventor.mit.edu" target="_blank">Need Help?</a>';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_USB_CONNECTED_WAIT = "USB Connected, waiting ";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_SECONDS_ENSURE_RUNNING = " seconds to ensure all is running.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_EMULATOR_STARTED = "Emulator started, waiting ";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_STARTING_COMPANION_ON_PHONE = "Starting the Companion App on the connected phone.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_STARTING_COMPANION_IN_EMULATOR = "Starting the Companion App in the emulator.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_COMPANION_STARTED_WAITING = "Companion starting, waiting ";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_VERIFYING_COMPANION = "Verifying that the Companion Started....";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_CONNECT_TO_COMPANION = "Connect to Companion";
Blockly.Msg.REPL_TRY_AGAIN1 = "Failed to Connect to the MIT AI2 Companion, try again.";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_YOUR_CODE_IS = "Your code is";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_DO_YOU_REALLY_Q = "Do You Really?";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_FACTORY_RESET = 'This will attempt to reset your Emulator to its "factory" state. If you had previously updated the Companion installed in the Emulator, you will likely have to do this again.';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_WEBRTC_CONNECTION_ERROR = "Companion Connection Error";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.REPL_EMULATOR_ONLY = 'You can only use this option to update the Emulator';

// Messages from Blockly.js
Blockly.Msg.WARNING_DELETE_X_BLOCKS = "Are you sure you want to delete all %1 of these blocks?";

// Blocklyeditor.js
Blockly.Msg.GENERATE_YAIL = "Generate Yail";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DO_IT = "Do It";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DO_IT_DISCONNECTED = 'Do It (Companion not connected)';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.CLEAR_DO_IT_ERROR = "Clear Error";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.CAN_NOT_DO_IT = "Cannot Do it";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.CONNECT_TO_DO_IT = 'You must be connected to the companion or emulator to use "Do It"';

// Clock Component Menu Items
Blockly.Msg.TIME_YEARS = "Years";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.TIME_MONTHS = "Months";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.TIME_WEEKS = "Weeks";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.TIME_DAYS = "Days";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.TIME_HOURS = "Hours";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.TIME_MINUTES = "Minutes";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.TIME_SECONDS = "Seconds";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.TIME_DURATION = "Duration";

// Connection Dialog Messages
Blockly.Msg.DIALOG_RENDEZVOUS_NEGOTIATING = "15 Rendezvous (please wait)";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DIALOG_SECURE_ESTABLISHING = "20 Establishing Secure Connection";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DIALOG_SECURE_ESTABLISHED = "30 Secure Connection Established";
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DIALOG_FOUND_COMPANION = "10 Found the Companion";

//Blockly.Util.Dialog Messages
Blockly.Msg.DIALOG_UNBOUND_VAR = 'Unbound Variables';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DIALOG_SUBMIT = 'Submit';
/** @type {string} */
/// App Inventor Strings
Blockly.Msg.DIALOG_ENTER_VALUES = 'Enter values for:';
