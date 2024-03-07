# Diagrams As Code

## Install Graphviz

[Graphviz Installation](https://graphviz.org/download/)

For Windows

```
1. Right click over the Start button and select run. Next paste the following command:
rundll32.exe sysdm.cpl,EditEnvironmentVariables
Finally press CTRL+SHIFT+ENTER keys instead selecting the ok button.

2. Install windows package from: https://graphviz.gitlab.io/_pages/Download/Download_windows.html

3. Install python graphviz package
Add C:\Program Files\Graphviz\bin to User path
Add C:\Program Files\Graphviz\bin\dot.exe to System Path

4. Restart Computer
```

## Install Python Diagrams

```python
pip install diagrams
```

Create a `diagram.py` and try out the package

```python
# diagram.py
from diagrams import Diagram
from diagrams.aws.compute import EC2
from diagrams.aws.database import RDS
from diagrams.aws.network import ELB

with Diagram("Test", show=True, direction="TB"):
    ELB("lb") >> EC2("web") >> RDS("userdb")

```

Run the script use the below command

```python
python diagram.py
```

A `test.png` file should be generated in your working directory
