# Lógica Formal
## Introducción

La lógica formal es el estudio de la inferencia válida mediante el uso de sistemas formales. Este documento proporciona una introducción completa a la sintaxis y semántica de los diferentes sistemas lógicos, explicando todos los símbolos y notaciones utilizadas en el análisis de falacias lógicas, junto con herramientas computacionales disponibles para trabajar con estos sistemas.

## I. LÓGICA PROPOSICIONAL

### 1.1 Sintaxis Básica

#### 1.1.1 Proposiciones Atómicas
- **Notación:** `P, Q, R, S, ...` o `p, q, r, s, ...`
- **Definición:** Enunciados simples que pueden ser verdaderos o falsos
- **Ejemplos:** 
  - `P: "Llueve"`
  - `Q: "Es martes"`

#### 1.1.2 Conectivos Lógicos

| Símbolo | Nombre | Significado | Ejemplo |
|---------|--------|-------------|---------|
| `¬` | Negación | No P | `¬P: "No llueve"` |
| `∧` | Conjunción | P y Q | `P ∧ Q: "Llueve y es martes"` |
| `∨` | Disyunción | P o Q | `P ∨ Q: "Llueve o es martes"` |
| `→` | Implicación | Si P entonces Q | `P → Q: "Si llueve, entonces me quedo en casa"` |
| `↔` | Bicondicional | P si y solo si Q | `P ↔ Q: "Llueve si y solo si hay nubes"` |
| `⊕` | Disyunción Exclusiva | P o Q pero no ambos | `P ⊕ Q: "O llueve o es soleado"` |

#### 1.1.3 Precedencia de Operadores
1. `¬` (más alta precedencia)
2. `∧, ∨`
3. `→, ↔` (más baja precedencia)

**Ejemplo:** `¬P ∧ Q → R` se interpreta como `((¬P) ∧ Q) → R`

### 1.2 Semántica: Tablas de Verdad

#### 1.2.1 Tabla de Verdad para Conectivos Básicos

| P | Q | ¬P | P∧Q | P∨Q | P→Q | P↔Q | P⊕Q |
|---|---|----|----|----|----|----|----|
| V | V | F  | V  | V  | V  | V  | F  |
| V | F | F  | F  | V  | F  | F  | V  |
| F | V | V  | F  | V  | V  | F  | V  |
| F | F | V  | F  | F  | V  | V  | F  |

#### 1.2.2 Conceptos Fundamentales

**Tautología:** `τ` - Fórmula siempre verdadera
- Ejemplo: `P ∨ ¬P`

**Contradicción:** `⊥` - Fórmula siempre falsa  
- Ejemplo: `P ∧ ¬P`

**Contingencia:** Fórmula que puede ser verdadera o falsa
- Ejemplo: `P ∧ Q`

### 1.3 Equivalencias Lógicas Importantes

#### 1.3.1 Leyes de De Morgan
- `¬(P ∧ Q) ≡ (¬P ∨ ¬Q)`
- `¬(P ∨ Q) ≡ (¬P ∧ ¬Q)`

#### 1.3.2 Leyes de Distribución
- `P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)`
- `P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)`

#### 1.3.3 Leyes de Absorción
- `P ∧ (P ∨ Q) ≡ P`
- `P ∨ (P ∧ Q) ≡ P`

#### 1.3.4 Definición de Implicación
- `P → Q ≡ ¬P ∨ Q`

### 1.4 Inferencia Válida

#### 1.4.1 Reglas de Inferencia Básicas

**Modus Ponens:**
```
P → Q
P
∴ Q
```

**Modus Tollens:**
```
P → Q
¬Q
∴ ¬P
```

**Silogismo Hipotético:**
```
P → Q
Q → R
∴ P → R
```

**Silogismo Disyuntivo:**
```
P ∨ Q
¬P
∴ Q
```

## II. LÓGICA DE PREDICADOS (PRIMER ORDEN)

### 2.1 Sintaxis Extendida

#### 2.1.1 Elementos Básicos

**Variables:** `x, y, z, ...`
- Representan objetos individuales no especificados

**Constantes:** `a, b, c, ...` o nombres propios
- Representan objetos específicos
- Ejemplo: `juan, maría, 5, madrid`

**Predicados:** `P(x), Q(x,y), R(x,y,z), ...`
- Expresan propiedades o relaciones
- Ejemplos:
  - `Alto(x): "x es alto"`
  - `Mayor(x,y): "x es mayor que y"`
  - `Entre(x,y,z): "x está entre y y z"`

**Funciones:** `f(x), g(x,y), ...`
- Mapean objetos a otros objetos
- Ejemplos:
  - `padre(x): "el padre de x"`
  - `suma(x,y): "la suma de x e y"`

#### 2.1.2 Cuantificadores

| Símbolo | Nombre | Significado | Ejemplo |
|---------|--------|-------------|---------|
| `∀` | Cuantificador Universal | Para todo | `∀x: Mortal(x)` "Todo es mortal" |
| `∃` | Cuantificador Existencial | Existe | `∃x: Sabio(x)` "Algo es sabio" |
| `∃!` | Existencial Único | Existe único | `∃!x: Presidente(x)` "Hay un único presidente" |

#### 2.1.3 Alcance y Variables Ligadas

**Variable ligada:** Variable que está dentro del alcance de un cuantificador
**Variable libre:** Variable que no está ligada por ningún cuantificador

Ejemplo: `∀x: P(x,y) → Q(z)`
- `x` está ligada por `∀`
- `y` y `z` son variables libres

### 2.2 Fórmulas Bien Formadas

#### 2.2.1 Definición Recursiva
1. Si `P` es un predicado n-ario y `t₁, t₂, ..., tₙ` son términos, entonces `P(t₁, t₂, ..., tₙ)` es una fórmula atómica
2. Si `φ` es una fórmula, entonces `¬φ` es una fórmula
3. Si `φ` y `ψ` son fórmulas, entonces `(φ ∧ ψ)`, `(φ ∨ ψ)`, `(φ → ψ)`, `(φ ↔ ψ)` son fórmulas
4. Si `φ` es una fórmula y `x` es una variable, entonces `∀x: φ` y `∃x: φ` son fórmulas

### 2.3 Ejemplos de Formalización

#### 2.3.1 Enunciados Simples
- "Todos los humanos son mortales": `∀x: (Humano(x) → Mortal(x))`
- "Algunos gatos son negros": `∃x: (Gato(x) ∧ Negro(x))`
- "Nadie es perfecto": `¬∃x: Perfecto(x)` o `∀x: ¬Perfecto(x)`

#### 2.3.2 Enunciados Relacionales
- "Todo número tiene un sucesor": `∀x: ∃y: Sucesor(y,x)`
- "Hay alguien que ama a todos": `∃x: ∀y: Ama(x,y)`
- "Todos aman a alguien": `∀x: ∃y: Ama(x,y)`

#### 2.3.3 Diferencias Importantes en Cuantificación
- `∀x: ∃y: P(x,y)` ≠ `∃y: ∀x: P(x,y)`
- `∀x: (P(x) → Q(x))` ≠ `(∀x: P(x)) → (∀x: Q(x))`

## III. LÓGICAS MODALES

### 3.1 Sintaxis Modal

#### 3.1.1 Operadores Modales

| Símbolo | Nombre | Significado |
|---------|--------|-------------|
| `□` | Necesidad | Es necesario que |
| `◇` | Posibilidad | Es posible que |

#### 3.1.2 Definiciones
- `◇P ≡ ¬□¬P` (Posible P = No es necesario que no P)
- `□P ≡ ¬◇¬P` (Necesario P = No es posible que no P)

### 3.2 Sistemas Modales

#### 3.2.1 Sistema K (Básico)
**Axioma K:** `□(P → Q) → (□P → □Q)`
**Regla de Necesitación:** Si `⊢ P` entonces `⊢ □P`

#### 3.2.2 Sistema T
**Añade Axioma T:** `□P → P` (Lo necesario es verdadero)

#### 3.2.3 Sistema S4
**Añade Axioma 4:** `□P → □□P` (Necesidad es transitiva)

#### 3.2.4 Sistema S5
**Añade Axioma 5:** `◇P → □◇P` (Posibilidad es necesaria)

### 3.3 Aplicaciones de Lógica Modal

#### 3.3.1 Modalidad Alética (Necesidad/Posibilidad)
- `□(2 + 2 = 4)` "Necesariamente 2 + 2 = 4"
- `◇(Llueva mañana)` "Es posible que llueva mañana"

#### 3.3.2 Modalidad Epistémica (Conocimiento/Creencia)
- `K_a P` "a sabe que P"
- `B_a P` "a cree que P"

## IV. LÓGICA TEMPORAL

### 4.1 Operadores Temporales Básicos

| Símbolo | Nombre | Significado |
|---------|--------|-------------|
| `G` | Globalmente | Siempre en el futuro |
| `F` | Finalmente | Eventualmente |
| `X` | Siguiente | En el próximo momento |
| `U` | Hasta | P hasta Q |

### 4.2 Definiciones y Equivalencias
- `F P ≡ ¬G ¬P` (Eventualmente P = No siempre no P)
- `G P ≡ ¬F ¬P` (Siempre P = No eventualmente no P)

### 4.3 Ejemplos Temporales
- `G(Semáforo_rojo → X Semáforo_verde)` 
  "Siempre, si el semáforo está rojo, el siguiente estado será verde"
- `F Graduación` "Eventualmente me graduaré"

## V. LÓGICA DEÓNTICA

### 5.1 Operadores Deónticos

| Símbolo | Nombre | Significado |
|---------|--------|-------------|
| `O` | Obligatorio | Es obligatorio que |
| `P` | Permitido | Es permitido que |
| `F` | Prohibido | Está prohibido que |

### 5.2 Relaciones Deónticas
- `O P ≡ ¬P ¬P` (Obligatorio P = No permitido no P)
- `F P ≡ ¬P P` (Prohibido P = No permitido P)
- `F P ≡ O ¬P` (Prohibido P = Obligatorio no P)

### 5.3 Ejemplos Deónticos
- `O(Pagar_impuestos)` "Es obligatorio pagar impuestos"
- `F(Robar)` "Está prohibido robar"
- `P(Estudiar_filosofía)` "Es permitido estudiar filosofía"

## VI. LÓGICA FUZZY (DIFUSA)

### 6.1 Conceptos Básicos
- **Valores de verdad:** `[0, 1]` en lugar de `{0, 1}`
- **Función de pertenencia:** `μ_A(x) ∈ [0, 1]`

### 6.2 Operadores Fuzzy

| Clásico | Fuzzy (Zadeh) | Ejemplo |
|---------|---------------|---------|
| `¬P` | `1 - μ_P(x)` | Si P = 0.7, entonces ¬P = 0.3 |
| `P ∧ Q` | `min(μ_P(x), μ_Q(x))` | 0.7 ∧ 0.4 = 0.4 |
| `P ∨ Q` | `max(μ_P(x), μ_Q(x))` | 0.7 ∨ 0.4 = 0.7 |

## VII. HERRAMIENTAS COMPUTACIONALES

### 7.1 Python

#### 7.1.1 Bibliotecas para Lógica Proposicional

**SymPy - Biblioteca más completa:**
```python
from sympy import symbols, And, Or, Not, Implies, Equivalent
from sympy.logic.boolalg import to_cnf, simplify_logic
from sympy.logic.inference import satisfiable

# Definir símbolos
P, Q, R = symbols('P Q R')

# Crear fórmulas
formula = Implies(P, And(Q, R))
print(f"Fórmula: {formula}")

# Verificar satisfacibilidad
print(f"Satisfacible: {satisfiable(formula)}")

# Convertir a CNF
cnf_formula = to_cnf(formula)
print(f"CNF: {cnf_formula}")

# Simplificar
simplified = simplify_logic(formula)
print(f"Simplificada: {simplified}")
```

**Python-Logic:**
```python
# pip install logic
from logic import *

# Crear proposiciones
p = Proposition('p')
q = Proposition('q')

# Crear fórmulas complejas
formula = (p >> q) & p  # (p → q) ∧ p
result = formula >> q   # Modus ponens

print(f"Fórmula válida: {result.is_tautology()}")
```

**PyKE (Python Knowledge Engine):**
```python
# Para sistemas basados en reglas
import pyke

# Definir hechos y reglas
# facts.kfb
animal(perro).
animal(gato).
mamifero(X) :- animal(X), tiene_pelo(X).

# Consultar
engine = pyke.knowledge_engine.engine()
engine.activate('facts')
```

#### 7.1.2 Bibliotecas para Lógica de Predicados

**Z3 Theorem Prover:**
```python
from z3 import *

# Crear solver
s = Solver()

# Definir variables
x = Int('x')
y = Int('y')

# Añadir restricciones
s.add(x > 0)
s.add(y > 0)
s.add(x + y == 10)

# Verificar satisfacibilidad
if s.check() == sat:
    model = s.model()
    print(f"Solución: x = {model[x]}, y = {model[y]}")
```

**Prover9/Mace4 (mediante pyprover):**
```python
# pip install pyprover
from pyprover import *

# Definir axiomas
axioms = [
    "all x (human(x) -> mortal(x))",
    "human(socrates)"
]

# Objetivo a probar
goal = "mortal(socrates)"

# Intentar prueba
prover = Prover9()
result = prover.prove(axioms, goal)
print(f"Demostrable: {result}")
```

#### 7.1.3 Bibliotecas para Lógica Modal

**Modal Logic Toolkit:**
```python
# pip install modal-logic
from modal_logic import *

# Crear modelo Kripke
model = KripkeModel()
model.add_world('w1')
model.add_world('w2')
model.add_relation('w1', 'w2')

# Evaluar fórmulas modales
formula = Necessarily(Proposition('p'))
result = model.evaluate(formula, 'w1')
```

#### 7.1.4 Bibliotecas para Lógica Temporal

**PyTLTL (Temporal Logic):**
```python
# pip install pytltl
from pytltl import *

# Definir fórmulas LTL
p = AP('p')  # Proposición atómica
formula = G(F(p))  # Globalmente eventualmente p

# Verificar en trazas
trace = ['p', '!p', 'p', '!p']
result = formula.evaluate(trace)
```

#### 7.1.5 Bibliotecas para Lógica Fuzzy

**Scikit-Fuzzy:**
```python
import skfuzzy as fuzz
import numpy as np

# Crear universo de discurso
x = np.arange(0, 11, 1)

# Crear conjunto fuzzy
temperatura_alta = fuzz.trimf(x, [5, 8, 10])

# Operaciones fuzzy
union = fuzz.fuzzy_or(x, temperatura_alta, temperatura_baja)
intersection = fuzz.fuzzy_and(x, temperatura_alta, temperatura_baja)
```

### 7.2 Rust

#### 7.2.1 Crates para Lógica

**logic-solver:**
```toml
[dependencies]
logic-solver = "0.4"
```

```rust
use logic_solver::*;

fn main() {
    let mut solver = Solver::new();
    
    // Crear variables
    let p = solver.new_var();
    let q = solver.new_var();
    
    // Añadir cláusulas: (p ∨ q) ∧ (¬p ∨ ¬q)
    solver.add_clause(&[p, q]);
    solver.add_clause(&[!p, !q]);
    
    match solver.solve() {
        Some(model) => {
            println!("Satisfacible: {:?}", model);
        }
        None => {
            println!("Insatisfacible");
        }
    }
}
```

**sat-solver:**
```toml
[dependencies]
sat-solver = "0.1"
```

```rust
use sat_solver::*;

fn main() {
    let mut solver = DPLL::new();
    
    // Fórmula CNF: (P ∨ Q) ∧ (¬P ∨ ¬Q)
    let cnf = vec![
        vec![1, 2],     // P ∨ Q
        vec![-1, -2],   // ¬P ∨ ¬Q
    ];
    
    match solver.solve(&cnf) {
        Solution::Satisfiable(assignment) => {
            println!("SAT: {:?}", assignment);
        }
        Solution::Unsatisfiable => {
            println!("UNSAT");
        }
    }
}
```

**Z3-Rust (binding para Z3):**
```toml
[dependencies]
z3 = "0.12"
```

```rust
use z3::*;

fn main() {
    let cfg = Config::new();
    let ctx = Context::new(&cfg);
    let solver = Solver::new(&ctx);

    // Crear variables enteras
    let x = ast::Int::new_const(&ctx, "x");
    let y = ast::Int::new_const(&ctx, "y");

    // Añadir restricciones
    solver.assert(&x.gt(&ast::Int::from_i64(&ctx, 0)));
    solver.assert(&y.gt(&ast::Int::from_i64(&ctx, 0)));
    solver.assert(&x._eq(&y.add(&ast::Int::from_i64(&ctx, 1))));

    match solver.check() {
        SatResult::Sat => {
            let model = solver.get_model().unwrap();
            println!("x = {}", model.eval(&x, true).unwrap());
            println!("y = {}", model.eval(&y, true).unwrap());
        }
        SatResult::Unsat => println!("Insatisfacible"),
        SatResult::Unknown => println!("Desconocido"),
    }
}
```

### 7.3 Otras Herramientas Importantes

#### 7.3.1 Demostración Automática de Teoremas
- **Coq:** Asistente de pruebas con tipos dependientes
- **Lean:** Demostrador moderno con sintaxis amigable
- **Isabelle/HOL:** Sistema para lógica de orden superior
- **Agda:** Lenguaje funcional con tipos dependientes

#### 7.3.2 Model Checkers
- **SPIN:** Verificación de sistemas concurrentes
- **TLA+:** Especificación y verificación de sistemas
- **UPPAAL:** Verificación de sistemas de tiempo real

#### 7.3.3 SAT/SMT Solvers
- **MiniSat:** Solver SAT minimalista
- **Glucose:** Solver SAT de alto rendimiento  
- **Z3:** SMT solver de Microsoft
- **CVC4/CVC5:** SMT solvers académicos

## VIII. APLICACIONES PRÁCTICAS

### 8.1 Verificación de Software

```python
# Usar Z3 para verificar propiedades de programas
from z3 import *

def verify_sorting_correctness():
    # Verificar que un algoritmo de ordenamiento es correcto
    n = 3  # Tamaño del array
    
    # Arrays antes y después del ordenamiento
    before = [Int(f'before_{i}') for i in range(n)]
    after = [Int(f'after_{i}') for i in range(n)]
    
    s = Solver()
    
    # Condición: el array después está ordenado
    for i in range(n-1):
        s.add(after[i] <= after[i+1])
    
    # Condición: mismo contenido (misma multiset)
    # Simplificado: misma suma y mismo producto
    s.add(Sum(before) == Sum(after))
    s.add(Product(before) == Product(after))
    
    # Verificar que existe una entrada no ordenada
    # que se convierte en una salida ordenada
    s.add(before[0] > before[1])  # Entrada desordenada
    
    if s.check() == sat:
        print("Encontrada instancia válida del algoritmo")
        print(s.model())
    else:
        print("No se puede verificar la corrección")
```

### 8.2 Análisis de Argumentos

```python
def analyze_argument(premises, conclusion):
    """Analizar si un argumento es válido usando SymPy"""
    from sympy import symbols, And, Implies, satisfiable
    
    # Crear la implicación: (premisa₁ ∧ premisa₂ ∧ ...) → conclusión
    all_premises = And(*premises)
    argument = Implies(all_premises, conclusion)
    
    # Un argumento es válido si su negación es insatisfacible
    negated_argument = Not(argument)
    
    if satisfiable(negated_argument):
        return False, "Argumento inválido"
    else:
        return True, "Argumento válido"

# Ejemplo: Modus Ponens
P, Q = symbols('P Q')
premises = [Implies(P, Q), P]
conclusion = Q

valid, message = analyze_argument(premises, conclusion)
print(f"Modus Ponens: {message}")
```

### 8.3 Sistemas Expertos

```python
class LogicExpertSystem:
    def __init__(self):
        self.facts = set()
        self.rules = []
    
    def add_fact(self, fact):
        self.facts.add(fact)
    
    def add_rule(self, premises, conclusion):
        self.rules.append((premises, conclusion))
    
    def infer(self):
        """Forward chaining inference"""
        new_facts = True
        while new_facts:
            new_facts = False
            for premises, conclusion in self.rules:
                if (all(p in self.facts for p in premises) and 
                    conclusion not in self.facts):
                    self.facts.add(conclusion)
                    new_facts = True
                    print(f"Inferido: {conclusion}")
    
    def query(self, goal):
        return goal in self.facts

# Ejemplo de uso
expert_system = LogicExpertSystem()

# Hechos
expert_system.add_fact("mortal(sócrates)")
expert_system.add_fact("humano(sócrates)")

# Reglas
expert_system.add_rule(["humano(x)"], "mortal(x)")
expert_system.add_rule(["mortal(x)", "filósofo(x)"], "filósofo_mortal(x)")

# Inferencia
expert_system.infer()

# Consulta
resultado = expert_system.query("mortal(sócrates)")
print(f"¿Es Sócrates mortal? {resultado}")
```

## IX. EJERCICIOS PRÁCTICOS

### 9.1 Lógica Proposicional

**Ejercicio 1:** Determinar si las siguientes fórmulas son tautologías, contradicciones o contingencias:
1. `(P → Q) → (¬Q → ¬P)`
2. `P ∧ ¬P`
3. `(P ∨ Q) ∧ (¬P ∨ ¬Q)`

**Solución en Python:**
```python
from sympy import *
from sympy.logic.boolalg import *

P, Q = symbols('P Q')

formulas = [
    Implies(Implies(P, Q), Implies(Not(Q), Not(P))),
    And(P, Not(P)),
    And(Or(P, Q), Or(Not(P), Not(Q)))
]

for i, formula in enumerate(formulas, 1):
    tt = truth_table(formula, [P, Q])
    values = [row[-1] for row in tt]
    
    if all(values):
        result = "Tautología"
    elif not any(values):
        result = "Contradicción"
    else:
        result = "Contingencia"
    
    print(f"Fórmula {i}: {result}")
```

### 9.2 Lógica de Predicados

**Ejercicio 2:** Formalizar los siguientes enunciados:
1. "Todos los estudiantes que estudian aprueban"
2. "Algunos profesores enseñan a todos los estudiantes"
3. "Ningún estudiante aprueba sin estudiar"

**Solución:**
```python
# Usando Z3 para verificar consistencia
from z3 import *

# Definir sorts (dominios)
Student = DeclareSort('Student')
Professor = DeclareSort('Professor')

# Definir predicados
studies = Function('studies', Student, BoolSort())
passes = Function('passes', Student, BoolSort())
teaches = Function('teaches', Professor, Student, BoolSort())

# Variables
s = Const('s', Student)
p = Const('p', Professor)

# Formalización:
# 1. ∀s: (studies(s) → passes(s))
axiom1 = ForAll(s, Implies(studies(s), passes(s)))

# 2. ∃p: ∀s: teaches(p, s)
axiom2 = Exists(p, ForAll(s, teaches(p, s)))

# 3. ∀s: (passes(s) → studies(s))
axiom3 = ForAll(s, Implies(passes(s), studies(s)))

# Verificar consistencia
solver = Solver()
solver.add(axiom1, axiom2, axiom3)

if solver.check() == sat:
    print("Los axiomas son consistentes")
else:
    print("Los axiomas son inconsistentes")
```

## X. CONCLUSIONES Y RECURSOS ADICIONALES

### 10.1 Resumen de Conceptos Clave

1. **Sintaxis vs Semántica:** La sintaxis define la forma correcta de escribir fórmulas; la semántica define su significado
2. **Validez vs Verdad:** Un argumento puede ser válido con premisas falsas
3. **Decidibilidad:** La lógica proposicional es decidible; la lógica de predicados no
4. **Expresividad:** Mayor expresividad generalmente implica mayor complejidad computacional

### 10.2 Recursos Adicionales

#### 10.2.1 Libros Recomendados
- "Mathematical Logic" - Shoenfield
- "A Mathematical Introduction to Logic" - Enderton  
- "Logic for Computer Science" - Huth & Ryan
- "Handbook of Practical Logic and Automated Reasoning" - Harrison

#### 10.2.2 Cursos Online
- **Coursera:** "Introduction to Mathematical Thinking" - Stanford
- **edX:** "Automated Reasoning" - TU Delft
- **MIT OpenCourseWare:** "6.825 Techniques in Artificial Intelligence"
- **Khan Academy:** "Algebra Basics" (para fundamentos)

#### 10.2.3 Herramientas Online
- **Logic Calculator:** https://www.logicmatters.net/resources/
- **Truth Table Generator:** https://web.stanford.edu/class/cs103/tools/truth-table-tool/
- **Z3 Online:** https://rise4fun.com/Z3
- **Lean Web Editor:** https://leanprover.github.io/live/
