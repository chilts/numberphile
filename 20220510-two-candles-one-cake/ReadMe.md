# Two Candles, One Cake #

* YouTube Video : https://www.youtube.com/watch?v=FkVe8qrT0LA&t=86s

This is a relatively simple program. We run 100,000 iterations to check our
numbers.

Firstly, we generate a random number between 0 and 1 for Candle A, the same for
Candle B, and again for the Knife. Each is independent of each other.

For the Knife to be between Candle A and Candle B, we need to check if it's
between them. Instead of figuring out which one is the lowest or the highest
and calculating from there, we just take the lowest and the highest and use
those. Whilst this doesn't seem much different, we can then do something which
makes our problem slightly clearer.

At the end of the program, as well as displaying whether the Knife was between
the candles, we are also going to display the averages of the following:

* Candle A
* Candle B
* Knife
* low(Candle A, Candle B)
* high(Candle A, Candle B)

Why?

Because that way we can see how those figures essentially give us the
probabilities, hence give us the answer.

Intuitively we know that the average of each of the candles and the knife will
be 0.5. However, we don't really have much intuition for what the average of
the lows/highs of both candles are.

## Questions ##

1. What do you think the average of the two candles is?
2. What do you think the average of the LOWs of the two candles is?
3. What do you think the average of the HIGHs of the two candles is?

## Run the Code ##

```
$ node 20220510-two-candles-one-cake/two-candles-one-cake.js
```

## Extensions ##

Bump up the iterations from 100,000 to 1,000,000 and see if you get a more
accurate answer.

(Ends)
