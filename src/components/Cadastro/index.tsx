import * as S from './styles'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import { useDispatch } from 'react-redux'
import { FormEvent, SetStateAction, useState } from 'react'
import { cadastrar } from '../../store/reducers/contatos'

const StyledInputTelefone = styled(InputMask)`
  border: 1px solid #808080;
  border-radius: 4px;
  padding: 6px 6px 4px 6px;
  margin: 4px 0px 12px 0px;

  font-size: 16px;

  ::placeholder {
    color: #bec2ba;
  }
`

const CadastrarContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const formatarTelefone = (valor: string) => {
    // Remove todos os caracteres que não sejam dígitos
    const telefoneSemMascara = valor.replace(/\D/g, '')

    // Formatação específica para telefone com DDD
    const ddd = telefoneSemMascara.slice(0, 2)
    const parte1 = telefoneSemMascara.slice(2, 6)
    const parte2 = telefoneSemMascara.slice(6, 10)

    return `(${ddd}) ${parte1}-${parte2}`
  }

  const handleChangeTelefone = (evento: { target: { value: any } }) => {
    const valor = evento.target.value
    const telefoneFormatado = formatarTelefone(valor)
    setTelefone(telefoneFormatado)
  }

  const cadastrarNovoContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        nome,
        telefone,
        email
      })
    )
    navigate('/')
  }

  // const InputTelefone = (props: any) => (
  //   <StyledInputTelefone
  //     id="number"
  //     mask="(99) 9999-9999"
  //     value={telefone}
  //     required
  //     placeholder="(99) 9999-9999"
  //     onChange={(evento: React.ChangeEvent<HTMLInputElement>) =>
  //       setTelefone(evento.target.value)
  //     }
  //   ></StyledInputTelefone>
  // )

  return (
    <div>
      {/* <h2>Cadastrar novo Contato </h2> */}
      <S.FormContato onSubmit={cadastrarNovoContato} action="">
        <S.Label htmlFor="nome">Nome:</S.Label>
        <S.Input
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          required
          placeholder="nome ou apelido"
          id="nome"
        />
        <S.Label htmlFor="email">Email:</S.Label>
        <S.Input
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="nome@email.com"
          id="email"
        />
        <S.Label htmlFor="telefone">Telefone:</S.Label>
        <S.Input
          value={telefone}
          onChange={handleChangeTelefone}
          type="text"
          required
          placeholder="(99) 9999-9999"
        />
        <S.Options>
          <S.Button>Cadastrar</S.Button>
          <S.ButtonCancel>
            <S.LinkCancel to="/">Cancelar</S.LinkCancel>
          </S.ButtonCancel>
        </S.Options>
      </S.FormContato>
    </div>
  )
}

export default CadastrarContato
