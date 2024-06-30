# 输入输出

## 输入

在 Python 中输入使用`input()`来声明
返回值为字符串，不管在输入了什么，返回值都是字符串

## 输出

输出使用`print()`来声明

## 案例：完成一个 IPO 系统

IPO：Input Process Output

通过用户舒服身高，体重来计算 BMI: (体重 / 身高的二次方)

```python
# 请输入体重
weight: float = float(input("Enter your weight: "))
high: float = float(input("Enter your high: "))
print(weight / (high ** 2))
```
