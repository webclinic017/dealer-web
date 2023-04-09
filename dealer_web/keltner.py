# import numpy as np
# import matplotlib.pyplot as plt
import pandas as pd
# from termcolor import colored as cl
# from math import floor

"""
plt.rcParams['figure.figsize'] = (20, 10)
plt.style.use('fivethirtyeight')
"""


def get_kc(high, low, close, kc_lookback, multiplier, atr_lookback):
    tr1 = pd.DataFrame(high - low)
    tr2 = pd.DataFrame(abs(high - close.shift()))
    tr3 = pd.DataFrame(abs(low - close.shift()))
    frames = [tr1, tr2, tr3]
    tr = pd.concat(frames, axis=1, join='inner').max(axis=1)
    atr = tr.ewm(alpha=1/atr_lookback).mean()

    # kc_middle = close.ewm(kc_lookback).mean()
    kc_upper = close.ewm(kc_lookback).mean() + multiplier * atr
    # kc_lower = close.ewm(kc_lookback).mean() - multiplier * atr

    return kc_upper
