-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Pagamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Pagamento` (
  `idPagmento` INT NOT NULL AUTO_INCREMENT,
  `valorFinal` DECIMAL(7,2) ZEROFILL NOT NULL,
  `notaFiscal` VARCHAR(45) NULL,
  `multa` DECIMAL(5,2) ZEROFILL NULL,
  PRIMARY KEY (`idPagmento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`FormaPag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`FormaPag` (
  `idFormaPag` INT NOT NULL AUTO_INCREMENT,
  `valor` DECIMAL(7,2) ZEROFILL NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `tipoOnline` TINYINT NOT NULL,
  `taxa` DECIMAL(5,2) ZEROFILL NULL,
  `qtdParcelas` INT NULL,
  `desconto` DECIMAL(5,2) ZEROFILL NULL,
  `Pagamento_idPagmento` INT NOT NULL,
  PRIMARY KEY (`idFormaPag`, `Pagamento_idPagmento`),
  INDEX `fk_FormaPag_Pagamento1_idx` (`Pagamento_idPagmento` ASC) VISIBLE,
  CONSTRAINT `fk_FormaPag_Pagamento1`
    FOREIGN KEY (`Pagamento_idPagmento`)
    REFERENCES `mydb`.`Pagamento` (`idPagmento`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Cliente` (
  `cpf` VARCHAR(14) NOT NULL,
  `nome` VARCHAR(80) NOT NULL,
  `telefone` VARCHAR(11) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  `dataNasc` DATE NOT NULL,
  PRIMARY KEY (`cpf`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Status` (
  `idStatus` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idStatus`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Sala`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Sala` (
  `idSala` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `local` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idSala`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Reservas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Reservas` (
  `idReserva` INT NOT NULL AUTO_INCREMENT,
  `valor` DECIMAL(6,2) ZEROFILL NOT NULL,
  `data` DATE NOT NULL,
  `horaInicio` TIME NOT NULL,
  `horaFim` TIME NOT NULL,
  `Cliente_cpf` VARCHAR(14) NOT NULL,
  `Pagamento_idPagmento` INT NOT NULL,
  `Sala_idSala` INT NOT NULL,
  `Status_idStatus` INT NOT NULL,
  PRIMARY KEY (`idReserva`),
  INDEX `fk_Reservas_Cliente1_idx` (`Cliente_cpf` ASC) VISIBLE,
  INDEX `fk_Reservas_Pagamento1_idx` (`Pagamento_idPagmento` ASC) VISIBLE,
  INDEX `fk_Reservas_Status1_idx` (`Status_idStatus` ASC) VISIBLE,
  INDEX `fk_Reservas_Sala1_idx` (`Sala_idSala` ASC) VISIBLE,
  CONSTRAINT `fk_Reservas_Cliente1`
    FOREIGN KEY (`Cliente_cpf`)
    REFERENCES `mydb`.`Cliente` (`cpf`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Reservas_Pagamento1`
    FOREIGN KEY (`Pagamento_idPagmento`)
    REFERENCES `mydb`.`Pagamento` (`idPagmento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reservas_Status1`
    FOREIGN KEY (`Status_idStatus`)
    REFERENCES `mydb`.`Status` (`idStatus`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reservas_Sala1`
    FOREIGN KEY (`Sala_idSala`)
    REFERENCES `mydb`.`Sala` (`idSala`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Endereco` (
  `cep` VARCHAR(9) NOT NULL,
  `uf` VARCHAR(2) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `rua` VARCHAR(60) NOT NULL,
  `complemento` VARCHAR(10) NOT NULL,
  `obs` VARCHAR(60) NULL,
  `Cliente_cpf` VARCHAR(14) NOT NULL,
  PRIMARY KEY (`Cliente_cpf`),
  CONSTRAINT `fk_Endereco_Cliente`
    FOREIGN KEY (`Cliente_cpf`)
    REFERENCES `mydb`.`Cliente` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
