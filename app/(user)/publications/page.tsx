type Props = {
  title: string
  where: string
}

function Publication({title, where}: Props) {
  return (
    <div className="pt-4">
      <h2 className="italic">{title}</h2>
      <p className="py-1 text-sm">{where}</p>
    </div>
  )
}

function Page() {
  return (
    <div className="px-2 lg:px-10 py-4 grid grid-cols-1 gap-y-4 divide-y-4">
      <Publication
        where="Published in the Journal of Vision, 2015."
        title={'"A Neural Algorithm of Artistic Style" by Leon A. Gatys, Alexander S. Ecker, and Matthias Bethge.'}
      />
      <Publication
        where="Published in the International Conference on Learning Representations (ICLR), 2013."
        title={'"Efficient Estimation of Word Representations in Vector Space" by Tomas Mikolov, Kai Chen, Greg Corrado, and Jeffrey Dean.'}
      />
      <Publication
        where="Published in the Conference on Computer Vision and Pattern Recognition (CVPR), 2016."
        title={'"Deep Residual Learning for Image Recognition" by Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun.'}
      />
      <Publication
        where="Published in the Conference on Neural Information Processing Systems (NIPS), 2014."
        title={'"Generative Adversarial Networks" by Ian J. Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, and Yoshua Bengio.'}
      />
      <Publication
        where="Published in the Conference on Neural Information Processing Systems (NIPS), 2017."
        title={'"Attention Is All You Need" by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, and Illia Polosukhin.'}
      />
      <Publication
        where="Published in the Conference on Neural Information Processing Systems (NIPS), 2013."
        title={'"Playing Atari with Deep Reinforcement Learning" by Volodymyr Mnih, Koray Kavukcuoglu, David Silver, Alex Graves, Ioannis Antonoglou, Daan Wierstra, and Martin Riedmiller.'}
      />
      <Publication
        where="Published in the Conference on Computer Vision and Pattern Recognition (CVPR), 2016."
        title={'"Unsupervised Learning of Visual Representations using Videos" by Carl Vondrick, Hamed Pirsiavash, and Antonio Torralba.'}
      />
      <Publication
        where="Published in the Nature journal, 2015."
        title={'"Deep Learning" by Yann LeCun, Yoshua Bengio, and Geoffrey Hinton.'}
      />
      <Publication
        where="Published in the Conference on Autonomous Agents and Multiagent Systems (AAMAS), 2005."
        title={'"Playing for Real: A Multi-Agent Soccer Environment" by Christian Stone, Dennis Lee, and Manuela Veloso.'}
      />
      <Publication
        where="Published in the Journal of Machine Learning Research (JMLR), 2014."
        title={'"Dropout: A Simple Way to Prevent Neural Networks from Overfitting" by Nitish Srivastava, Geoffrey Hinton, Alex Krizhevsky, Ilya Sutskever, and Ruslan Salakhutdinov.'}
      />
      <Publication
        where="Published in the Journal of Vision, 2015."
        title={'"A Neural Algorithm of Artistic Style" by Leon A. Gatys, Alexander S. Ecker, and Matthias Bethge.'}
      />
      <Publication
        where="Published in the International Conference on Learning Representations (ICLR), 2013."
        title={'"Efficient Estimation of Word Representations in Vector Space" by Tomas Mikolov, Kai Chen, Greg Corrado, and Jeffrey Dean.'}
      />
      <Publication
        where="Published in the Conference on Computer Vision and Pattern Recognition (CVPR), 2016."
        title={'"Deep Residual Learning for Image Recognition" by Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun.'}
      />
      <Publication
        where="Published in the Conference on Neural Information Processing Systems (NIPS), 2014."
        title={'"Generative Adversarial Networks" by Ian J. Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, and Yoshua Bengio.'}
      />
      <Publication
        where="Published in the Conference on Neural Information Processing Systems (NIPS), 2017."
        title={'"Attention Is All You Need" by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, and Illia Polosukhin.'}
      />
      <Publication
        where="Published in the Conference on Neural Information Processing Systems (NIPS), 2013."
        title={'"Playing Atari with Deep Reinforcement Learning" by Volodymyr Mnih, Koray Kavukcuoglu, David Silver, Alex Graves, Ioannis Antonoglou, Daan Wierstra, and Martin Riedmiller.'}
      />
      <Publication
        where="Published in the Conference on Computer Vision and Pattern Recognition (CVPR), 2016."
        title={'"Unsupervised Learning of Visual Representations using Videos" by Carl Vondrick, Hamed Pirsiavash, and Antonio Torralba.'}
      />
      <Publication
        where="Published in the Nature journal, 2015."
        title={'"Deep Learning" by Yann LeCun, Yoshua Bengio, and Geoffrey Hinton.'}
      />
      <Publication
        where="Published in the Conference on Autonomous Agents and Multiagent Systems (AAMAS), 2005."
        title={'"Playing for Real: A Multi-Agent Soccer Environment" by Christian Stone, Dennis Lee, and Manuela Veloso.'}
      />
      <Publication
        where="Published in the Journal of Machine Learning Research (JMLR), 2014."
        title={'"Dropout: A Simple Way to Prevent Neural Networks from Overfitting" by Nitish Srivastava, Geoffrey Hinton, Alex Krizhevsky, Ilya Sutskever, and Ruslan Salakhutdinov.'}
      />
    </div>
  )
}

export default Page