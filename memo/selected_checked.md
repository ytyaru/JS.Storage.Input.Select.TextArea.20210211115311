# HTMLだけだと選択解除できない

　`select`,`input[type=radio]`要素は、選択項目をどれかひとつ選択すると、以降どれかひとつを必ず選択した状態になる。どれも選択しない状態にはできない。

　`select.selectedIndex = -1`, `radio.checked = false`とすれば選択解除できる。HTMLだけでは解除できない。

