# frozen_string_literal: true

require_relative '../caesar'

describe Caesar do
  describe '# Standard caesar rotation with 5 rotations' do
    it "'What a string!' returns 'Bmfy f xywnsl'" do
      string = 'What a string'
      rot = 5
      caesar = Caesar.new
      expect(caesar.caesar_cipher(string, rot)).to eql('Bmfy f xywnsl')
    end
  end

  describe '#Caesar cipther with special characters and 3 rotations' do
    it "'Special strings ¡@¡$$£½¥¥½[!' returns 'Pmbzfxi pqofkdp ¡@¡$$£½¥¥½[!'" do
      string = 'Special strings ¡@¡$$£½¥¥½[!'
      rot = 3
      caesar = Caesar.new
      expect(caesar.caesar_cipher(string, rot)).to eql('Vshfldo vwulqjv ¡@¡$$£½¥¥½[!')
    end
  end

  describe '#Caesar cipher with wrap around and 3 rotations' do
    it "'XYZ' returns 'ABC'" do
      string = 'XYZ'
      rot = 3
      caesar = Caesar.new
      expect(caesar.caesar_cipher(string, rot)).to eql('ABC')
    end
  end
end
