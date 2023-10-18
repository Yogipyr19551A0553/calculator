function appendToResult(val) {
            document.getElementById("result").innerText += val;
        }

        function clearResult() {
            document.getElementById("result").innerText = '';
        }

        function calculateResult() {
            let result = document.getElementById("result").innerText;
            try {
                let res = eval(result);
                document.getElementById("result").innerText = res;
            } catch (e) {
                document.getElementById("result").innerText = 'Error';
            }
        }

        function backspace() {
            let currentResult = document.getElementById("result").innerText;
            document.getElementById("result").innerText = currentResult.slice(0, -1);
        }